
import { 
    handleAddClick, handleSubtractClick, handleDivideClick, handleMultiplyClick } from './handlers.js'


const addButton = document.getElementById('add-button');
const subButton = document.getElementById('sub-button');
const divButton = document.getElementById('div-button');
const multButton = document.getElementById('mult-button');



addButton.addEventListener('click', handleAddClick);
subButton.addEventListener('click', handleSubtractClick);
divButton.addEventListener('click', handleDivideClick);
multButton.addEventListener('click', handleMultiplyClick);





