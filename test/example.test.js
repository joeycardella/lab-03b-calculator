// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { addTwoNumbers, subtractTwoNumbers, divideTwoNumbers, multiplyTwoNumbers } from '../mathUtils.js';

const test = QUnit.test;

test('addTwoNumbers should return 5 if passed 2 and 3', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 5;
    const firstNumber = 2;
    const secondNumber = 3;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = addTwoNumbers(firstNumber, secondNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('subtractTwoNumbers should return 6 if passed 7 and 1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 6;
    const firstNumber = 7;
    const secondNumber = 1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtractTwoNumbers(firstNumber, secondNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('divideTwoNumbers should return 5 if passed 10 and 2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 5;
    const firstNumber = 10;
    const secondNumber = 2;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divideTwoNumbers(firstNumber, secondNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('multiplyTwoNumbers should return 8 if passed 2 and 4', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 8;
    const firstNumber = 2;
    const secondNumber = 4;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiplyTwoNumbers(firstNumber, secondNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});