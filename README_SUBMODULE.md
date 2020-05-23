# Snowdog Front-end Recruitment test

## About
Please clone the repo by using `git clone` command.
Please use `yarn install` command to install all the needed libraries and dependencies.
Please use `gulp serve` command in order to see the [localhost](http://localhost:3000) version ready to develop (please use Node.js - v10.20.1).
In case you are using another version of Node.js, the best solution for switching the Node version is installing the [Node Version Manager](https://github.com/nvm-sh/nvm#installing-and-updating) and then use following commands to install and use a specific version of Node.js: `nvm install 10` and `nvm use 10` for OSX system or `nodist + 10` and `nodist use 10` for Windows system. To make sure you are using right Node version please use this comand `node -v`.
Or check out this website [Using a Node Version Manager](http://npm.github.io/installation-setup-docs/installing/using-a-node-version-manager.html).

## Regarding Task 1
I have added an extra tab called `SUBMODULE` at the and of the existing tabs to improve navigating the site.
I have used Vue.js implementation to clone image with the button. It's a really simple solution. The whole DOM element `<section>` + `<img>` are cloning as a next DOM elements underneath one by one. Each of a new section get an extra class e.g.: bacon-0, bacon-1 etc. in case we need to use different styles in the future.
I have changed the CSS folder structure and improved the `gulpfile.babel.js` file to combine all the scss files into one final file contains styles.

---

## Regarding Task 2
TBC

---

## Regarding Task 3
TBC
