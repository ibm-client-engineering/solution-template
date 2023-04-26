#!/bin/bash

echo What is the name of the project name?
read project
echo What is the name of the Orgonization?
read org
url=https://$org.github.io
baseUrl=/$project/
repo=https://github.com/$org/$project.git

echo Creating Variables

cat > website/variables.js <<EOF
const vars = {
    repo: '$repo',
    project: '$project',
    org: '$org',
    url: '$url',
    baseUrl: '$baseUrl'
};
module.exports = { vars };
EOF

cd website

echo Updating Packages
npm i
npm update

echo Building local site for testing
yarn build

echo Launching site
npm run serve