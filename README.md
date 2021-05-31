# TestProject JavaScript OpenSDK Demo

This project is a simple demo of the [TestProject JavaScript OpenSDK](https://github.com/testproject-io/javascript-opensdk). It contains an app built with React that runs end-to-end tests using [Jest](https://jestjs.io/) and [TestProject](https://testproject.io/).

## Running the app locally

You can run the app on your machine by cloning the repo, running `yarn install` to install the dependencies, and then running `yarn start` to start the app in development mode.

To run the end-to-end tests, you first need to install the TestProject agent on your machine, generate a developer token, and include that token in the `.env` file as the `TP_DEV_TOKEN` variable. Once you've completed those steps, you can run `yarn test:e2e` to run the tests.

## General setup process

This app was built by following these general steps:

1. Bootstrap the app with create-react-app
2. Build a simple form
3. Create a TestProject account
4. Download the TestProject agent
5. Install the two dependencies for TestProject and Selenium
6. Configure Jest to run unit tests and e2e tests (add different npm scripts and also increase the Jest test timeout for the e2e tests)
7. Generate a TestProject developer token and put that in the `.env` file
8. Write some e2e tests for the form when it is submitted correctly and when it is submitted incorrectly

## npm scripts

- `build`: Builds the production app
- `eject`: Ejects from `react-scripts`
- `format`: Formats the code using Prettier
- `format:watch`: Formats the code using Prettier in watch mode
- `start`: Starts the app for running locally in development mode
- `test:e2e`: Runs the e2e tests with Jest and TestProject
- `test:e2e:watch`: Runs the e2e tests with Jest and TestProject in watch mode
- `test:unit`: Runs the unit tests with Jest and React Testing Library
- `test:unit:coverage`: Runs the unit tests and generates a coverage report
- `test:unit:watch`: Runs the unit tests with Jest and React Testing Library in watch mode
