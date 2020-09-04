// import functions and grab DOM elements
import { addTwoNumbers, subtractTwoNumbers, divideTwoNumbers, multiplyTwoNumbers } from '../mathUtils.js';

const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addTotal = document.getElementById('add-total');

// define "what happens" on click
// no parameters? Therefore it cannot be a PURE function.
// IMPURE FUNCTIONS are suuuuper hard to test

export function handleAddClick() {

    const value1 = addInput1.valueAsNumber; 
    const value2 = addInput2.valueAsNumber; 

        // - Add together the VALUE of the two inputs
    // function call
    // we have the blueprint, so this is the building:
    // we pass in the ingredients, and the function 'runs', as defined in the declaration

    const sum = addTwoNumbers(value1, value2);

    // - Inject the sum into our sum `span`
        
    addTotal.textContent = sum;
        
}

const subInput1 = document.getElementById('sub-input-1');
const subInput2 = document.getElementById('sub-input-2');
const subTotal = document.getElementById('sub-total');

export function handleSubtractClick() {

    const value1 = subInput1.valueAsNumber; 
    const value2 = subInput2.valueAsNumber; 

    const difference = subtractTwoNumbers(value1, value2);
    
    subTotal.textContent = difference;
}
 
const divInput1 = document.getElementById('div-input-1');
const divInput2 = document.getElementById('div-input-2');
const divTotal = document.getElementById('div-total');

export function handleDivideClick() {

    const value1 = divInput1.valueAsNumber; 
    const value2 = divInput2.valueAsNumber; 


    const quotient = divideTwoNumbers(value1, value2);
    
    divTotal.textContent = quotient;
}

const multInput1 = document.getElementById('mult-input-1');
const multInput2 = document.getElementById('mult-input-2');
const multTotal = document.getElementById('mult-total');

export function handleMultiplyClick() {

    const value1 = multInput1.valueAsNumber; 
    const value2 = multInput2.valueAsNumber; 

    const product = multiplyTwoNumbers(value1, value2);
    
    multTotal.textContent = product;
}