// import functions and grab DOM elements
const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addTotal = document.getElementById('add-total');
const addButton = document.getElementById('add-button');

// initialize state

// set event listeners to update state and DOM
addButton.addEventListener('click', () => {
    
    const value1 = addInput1.valueAsNumber; 
    const value2 = addInput2.valueAsNumber; 
console.log(value1, value2);

    const sum = value1 + value2;
    
    addTotal.textContent = sum;
});


const subInput1 = document.getElementById('sub-input-1');
const subInput2 = document.getElementById('sub-input-2');
const subTotal = document.getElementById('sub-total');
const subButton = document.getElementById('sub-button');

// initialize state

// set event listeners to update state and DOM
subButton.addEventListener('click', () => {
    
    const value1 = subInput1.valueAsNumber; 
    const value2 = subInput2.valueAsNumber; 
console.log(value1, value2);

    const sum = value1 - value2;
    
    subTotal.textContent = sum;
});

const divInput1 = document.getElementById('div-input-1');
const divInput2 = document.getElementById('div-input-2');
const divTotal = document.getElementById('div-total');
const divButton = document.getElementById('div-button');

// initialize state

// set event listeners to update state and DOM
divButton.addEventListener('click', () => {
    
    const value1 = divInput1.valueAsNumber; 
    const value2 = divInput2.valueAsNumber; 
console.log(value1, value2);

    const sum = value1 / value2;
    
    divTotal.textContent = sum;
});

const multInput1 = document.getElementById('mult-input-1');
const multInput2 = document.getElementById('mult-input-2');
const multTotal = document.getElementById('mult-total');
const multButton = document.getElementById('mult-button');

// initialize state

// set event listeners to update state and DOM
multButton.addEventListener('click', () => {
    
    const value1 = multInput1.valueAsNumber; 
    const value2 = multInput2.valueAsNumber; 
console.log(value1, value2);

    const sum = value1 * value2;
    
    multTotal.textContent = sum;
});