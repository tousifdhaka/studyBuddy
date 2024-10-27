README3.txt

1. Overview
This document provides detailed instructions on how to run basic function tests and unit tests for the project. The tests are designed to verify the correct functioning of various features of the application, such as the menu interactions, user inputs, and core components.

2. Setup Requirements

To run the tests, you need to set up your environment as follows:

1. Ensure you have [Node.js](https://nodejs.org/) installed, as the tests use JavaScript-based frameworks.
2. Install project dependencies by running the following command in the terminal:
   ```sh
   npm install
   ```
3. Make sure you have a browser installed (e.g., Google Chrome) to run automated tests.
4. Recommended: Install testing tools such as [Jest](https://jestjs.io/), [Cypress](https://www.cypress.io/), or any other preferred testing framework.

3. Running Unit Tests

To run unit tests for the different components, follow these steps:

1. Run the following command to initiate all unit tests:
   ```sh
   npm run test
   ```
   This command will execute all defined unit tests in the project, covering components such as user authentication, navigation, form validations, and more.

2. Output will be displayed in the console, indicating if all tests have passed or if any errors occurred. Look for green checkmarks (pass) or red crossmarks (fail).

3. Example Unit Test Files:
   - `navbar.test.js`: Tests the correct rendering and navigation of the navbar.
   - `schedule.test.js`: Tests functionality for scheduling.
   - `register.test.js`: Tests user registration validation and error-handling.

4. Running Functional Tests (Menu & User Interactions)

The following are the steps for running functional tests to verify different menu combinations and expected outcomes.
4.1 Test for Menu Interactions

1. Manual Testing:
   - Launch the application by running:
     ```sh
     npm start
     ```
   - Open your browser and navigate to the application (usually `http://localhost:3000`).
   - Navigate through the menu using different combinations (e.g., Login → Schedule → Video).
   - Verify the following actions:
     - Clicking "Login" directs to the Login page.
     - Clicking "Schedule" redirects to the Schedule section and shows the availability slots.
     - Navigating to "Video" successfully loads the video conferencing page.

2. Example Test Combinations:

   - Scenario 1: Login Page
     - Steps: Click on the "Login" link in the navbar.
     - Expected Outcome: The "Login" form should be rendered, allowing user authentication.

   - Scenario 2: Schedule Availability
     - Steps: Click on "Schedule" → Choose available slots → Click "Save Availability".
     - Expected Outcome: Selected slots should turn green, and saving should trigger a confirmation alert.

   - Scenario 3: Switching Pages
     - Steps: Navigate in this order: "Schedule" → "Video" → "Profile".
     - Expected Outcome: Each page loads correctly with no page reload or errors in the console.


## 6. Notes
- Make sure all dependencies are properly installed before attempting to run tests.
- In case of any errors, ensure that the components have the correct export statements (`export default ComponentName`).

If you have any questions, feel free to reach out to the development team for assistance.