#!/bin/bash

ORG=$1
REPO=$2
PAGES_URL=$3

PAGES_URL=$(echo "$PAGES_URL" | sed -s "s/https:\/\///")

document="docusaurus.config.js"

sed -i "s/\bbaseUrl:.*/baseUrl: \'\/$ORG\/$REPO\/\',/" $document
sed -i "s/\burl:.*/url: \'https:\/\/$PAGES_URL\',/" $document
sed -i "s/\bprojectName:.*/projectName: \'$REPO\',/" $document
sed -i "s/\/github.com\//\/github.ibm.com\//" $document
sed -i "s/solution-name/$REPO/" $document
sed -i "s/\bonBrokenLinks:.*/onBrokenLinks: \'warn\',/" $document