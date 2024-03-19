# IBM Client Engineering Solutions Documentation Template

## What is this?

This is a template used to quickly and effectively document assets and solutions created by Client Engineers at IBM. The template outlines the bare minimum requirements that must be documented when publishing your work. This template was created using the an open-saurce static site generator called **Docusaurus**, [click here](https://docusaurus.io/) to learn more.

## How do I use it?

1. Use this template to create a new repository in the ibm-client-engineering Open Solutions Library.

   Make sure you follow the naming convention: solution-name.
   
   For example: A solution that implements IBM FileNet on AWS EKS would be called **solution-filenet-aws**

2. Clone your new repository to your local machine.

3. Make initial changes to `docusaurus-config.js`.

   Open the `docusaurus-config.js` file in a code editor and update any instances of `insert-solution-name` according to the naming convention. Using the example above this would be `solution-filenet-aws`.

   Update the two instances of `Insert Solution Name` which occurs in `title` fields with the name of your solution which will be populated across the website. Using the example above this would be `IBM FileNet on AWS EKS`.

4. Start developing by running the site locally.

   Navigate into your directory with `cd solution-name`.

   Run `yarn install` or `npm install`  to get everything set up.

   **Note**: if there are dependency tree issues during the install, run `npm install --legacy-peer-deps` and then run the install command again.
    
   Run the site locally with `yarn run start` or `npm run start`.

5. Make changes and begin documenting your solution.

   The `docs` folder has all of the Markdown files for the pages you see on the site. Start by going to the `homepage.mdx` and filling out the title in accordance to our naming convention. 
   
   You can continue by looking through the other pages in the `docs` folder. Each sample page has a short description of the bare minimum documentation requirements. 

6. Adding Pages and Sections

   To a add a page simply make a copy of the `01-sample.mdx` and fill out the fields in the file. The number at the start of the file name indicates what position that page will show on the site. Make sure to edit the number along with the name when you create new pages.

   To add a section create a new folder in the `docs` folder with the position you want it to be in and the name you want it to show. For Example: you can create a new folder called `06-Testing` which would create a section called Testing after the Resources section.

