# Payments

This is a console app that reads and gets information from a .txt file to process the total amount payment for each employee according their working hours.

## Approach

The approach is to work with minutes. So, the unit time used in the app is minutes, for that reason the table and the worked hours information are transformed into minutes. 
After reading the .txt file, the information is parsed with two functions to extract and separate the employee's name, day, and worked time. 
Then, the parsed information is used by the payment process to calculate and get the values. In the process payment, I considered the range of the worked time, because it could be part of two or three ranges in the table. To solve this I separate the worked time into three timeframes and calculate the minutes for each one, then sum all the three timeframes to get the total amount for the employee. If an employee entry has an error in the worked hours, it won't show any result, it will show the error instead.

## Architecture

The payments app uses NodeJs and Jest and the structure is:

||description|
| ------ | ------ |
| **/config** | Contains the constants.js which has the table information in minutes and the days information. |
| **/utils** | Contains validator.js which helps to identify if a worked time format is correct or not, and timeOperations.js which transforms a hh:mm format to minutes. |
| **/parsers** | Contains the dataParser.js which transform a line of the employees.txt file extracting the name and the time worked information. |
| **/controllers** | Contains the calculator.js which has the processPayment function that allow to calculate the total amount to pay. |
| **/data** | It has the employees.txt file that has all the inputs to be processed. This is the input for the app. |
| **app.js** | This is start the application and read the employees.txt file and process the file line by line. |

## Tests

To run the tests execute: 
```
npm test
```

## How to use?

1. Once you get the code locally, execute: 
```
npm install
```
2. In the /data folder you can find the employees.txt with some entries, you can use this file or modify it with other information.
3. To run the app execute the following, the app will display the results in the console. 
```
node app.js. 
```
