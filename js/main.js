const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.result');
const clear = document.querySelector('.clear');
const dot = document.querySelector('.dot');
const op = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');
const negative = document.querySelector('.negative');

let calculator = {
    displayValue: '0',
    current: '',
    previous: '',
    operator: null,
    operatorClicked: false,
};

numbers.forEach(numBtnFunc);
op.forEach(operatorFunc);
clear.addEventListener('click', clearFunc);
equal.addEventListener('click', equalFunc);
dot.addEventListener('click', dotFunc);
negative.addEventListener('click', negativeFunc);


