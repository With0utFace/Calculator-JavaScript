function clearFunc() {
    calculator.displayValue = '0';
    calculator.current = '';
    calculator.previous = '';
    calculator.operator = null;
    updateDisplay();
}
function numBtnFunc (number) {
    number.addEventListener('click', function (e) {
        calculator.current += e.target.value;
        calculator.displayValue = calculator.current;
        updateDisplay();
    });
}
function updateDisplay() {
    result.value = calculator.displayValue;
}
function operatorFunc(op) {
    op.addEventListener('click', function (e) {
        if( e.target.classList.contains('operator')) {
            calculator.operator = e.target.value;
            calculator.previous = calculator.current;
            setPrevious();
            console.log(calculator.operator);
        }
    });
}
function setPrevious() {
        calculator.current = '';
}
function dotFunc() {
    if (calculator.current.includes('.')) {
        return false
    } else if (calculator.current === '') {
        calculator.current += '0.';
    } else {
        calculator.current += '.';
    }
    updateDisplay();
}
function negativeFunc() {
       calculator.current = calculator.current.charAt(0) ==='-' ?
       calculator.current.slice(1) : `-${calculator.current}`;
       updateDisplay();
}
function previousValue () {
    return parseFloat(calculator.previous);
}
function currentValue() {
    return parseFloat(calculator.current);
}
function equalFunc() {
    calculator.displayValue = operators[calculator.operator](calculator.previous, calculator.current);
    updateDisplay();
    calculator.current = calculator.displayValue;
}
let operators = {
    '+': function (a,b) { return previousValue(a) + currentValue(b); },
    '-': function (a,b) { return previousValue(a) - currentValue(b); },
    '/': function (a,b) { return previousValue(a) / currentValue(b); },
    '*': function (a,b) { return previousValue(a) * currentValue(b); },
    '%': function (a,b) { return (previousValue(a) / currentValue(b)) * 100; }
};
