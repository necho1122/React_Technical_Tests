# Custom hook with useEffect in react

This repository contains an example of how to create a custom hook in React that uses `useeEffect` to manage the status of an alert message that is shown and hides automatically.

## Description

In this project, we have created a custom hook called `useAlert` that allows you to show alert messages in a React application.The Hook uses `useState` to manage the message of visibility of the message and`useeEffect` to control the duration during which the message is shown before automatically hiding.

## Test instructions

1. The correct use of Custom Hooks.
2. The correct implementation of logic to show and clean the alert message.
3. The correct validation of the Custom Hook parameters.

## Solution

The solution to the exercise is to create a custom hook called useAlert that accepts two parameters: `message` and `duration`.The `message` parameter must be a string that represents the message to be displayed, and the `duration` parameter must be a number that represents the visualization time in milliseconds.

The Custom Hook must use the useState hook to store the message to be displayed. You must also use the useEffect hook to display the message on the screen and clean it once the specified time has elapsed.

## How to use

1. Clone This repository in your local machine.

2. Navigate to the project folder.

3. Install dependencies.

4. Start the application.

The example application will show a button that, when clicking, activates the Custom Hook `useAlert` and shows an alert message that is automatically hidden after 3 seconds.

## Contributions

Feel free to contribute to this project by sending improvements, error corrections or additional characteristics.Contributions are welcome and appreciated.

## Author

- [Nelson Ubac] (https://github.com/necho1122)