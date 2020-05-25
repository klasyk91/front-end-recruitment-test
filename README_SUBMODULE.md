# Snowdog Front-end Recruitment test

## Working DEMO (Task 1-3)
Direct link to working [DEMO](https://kubson.ovh/snow_dog/)

## About
Please clone the repo by using `git clone` command.<br />
Please use `yarn install` command to install all the needed libraries and dependencies.<br />
!IMPORTANT! Please use `git submodule update --init --recursive` to pull the files for submodule and `git pull --recurse-submodules` to update submodule.<br />
Please use `gulp serve` command in order to see the [localhost](http://localhost:3000) version ready to develop (please use Node.js - v10.20.1).<br />
In case you are using another version of Node.js, the best solution for switching the Node version is installing the [Node Version Manager](https://github.com/nvm-sh/nvm#installing-and-updating) and then use following commands to install and use a specific version of Node.js: `nvm install 10` and `nvm use 10` for OSX system or `nodist + 10` and `nodist use 10` for Windows system. To make sure you are using right Node version please use this comand `node -v`.<br /><br />
Or check out this website [Using a Node Version Manager](http://npm.github.io/installation-setup-docs/installing/using-a-node-version-manager.html).

## Regarding Task 1
I have added an extra tab called `SUBMODULE` at the and of the existing tabs to improve navigating the site.<br />
I have used Vue.js implementation to clone image with the button. It's a really simple solution. The whole DOM element `<section>` + `<img>` are cloning as a next DOM elements underneath one by one. Each of a new section get an extra class e.g.: bacon-0, bacon-1 etc. in case we need to use different styles in the future.<br />
I have changed the CSS folder structure and improved the `gulpfile.babel.js` file to combine all the scss files into one final file contains styles.<br /><br />

A direct link to repo for [submodule](https://github.com/klasyk91/front-end-recruitment-test-submodule)<br />

---

## Regarding Task 2
The form has been implemented according to the PNG file called `checkout.png`.<br />
I used the following tools: Adobe Photoshop (eyedropper, slice, text) to take all the needed details about the design.<br />
I have added a separate file for FORM styles in `/app/styles/sass/checkout_form.scss`.<br />
I have prepared all the structure/skeleton of the checkout form in `submodule.html`.<br />
The RWD has been implemented too.<br />
It has been tested on Firefox, Safari, Chrome, Microsoft Edge and Safari Mobile & Chrome mobile.<br />
Regarding `SELECT` field, in this case field called `Country`, there is no solution to improve the styles according to the design without using JavaScript. All the web browser just rendering this type of field with their own rules/styles. We are not able to overright that settings via CSS.<br />
If it's needed I can improve the select field by using jQuery library called [SELECT2](https://select2.org/) in the future.<br />

---

## Regarding Task 3
I used [jQuery Validation](https://jqueryvalidation.org/) plugin to implement form validation.<br />
I used [Input Mask](https://github.com/RobinHerbots/Inputmask) plugin to implement mask for credit card number, expiration date, phone number fields to improve user experience (it's more user friendly).<br />
All the JS code for validation you can find in `/app/scripts/form-validate/form-validate.js`.

---

## About validation
`First name` & `Last Name` fields allow for using:
* Polish letters
* Only letters
* First letter is automatically change into uppercase

`Email` field allows for using:
* Valid email address according regular expression

`Phone Number` field allows for using:
* Digits, brackets, spaces nad dashes (thanks to mask we can fill out with digits only)
* Valid phone number according regular expression
* Input mask helps to fill out this field

`Credit Card Number` field allows for using:
* Digits, spaces and dashes (thanks to mask we can fill out with digits only)
* Valid credit card number according regular expression, it starts with 4
* Input mask helps to fill out this field

`Security Code` field allows for using:
* Only 3 digits

`Expiration Date` field allows for using:
* Digits, spaces and slash (thanks to mask we can fill out with digits only)
* Input mask helps to fill out this field
