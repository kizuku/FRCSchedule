# frc-schedule

Schedule board for FRC competition matches.
Project can be found online at frc-schedule.herokuapp.com. Requires an internet connection to make API calls.
Made with VueJS frontend and NodeJS backend.

Has not yet been tested during live competition. Please test and provide feedback so that the tool can be improved.

## Environment Variable Setup
To make this work for yourself, make sure to properly set env vars.

To run on Local: 
	Create a .env file in the root directory of the project containing the following:
		apiUrl=<insert api url here>
		apiKey=<insert api key here>

To run on Heroku:
	Set heroku config vars as follows:
		heroku config:set apiUrl=<insert api url here>
		heroku config:set apiKey=<insert api key here>
	

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
