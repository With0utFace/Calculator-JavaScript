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
            calculator.operatorClicked = true;
            calculator.previous = calculator.current;
            setPrevious();
            console.log(calculator);
        }
    });
}

function setPrevious() {
    if(calculator.operatorClicked) {
        calculator.current = '';
        calculator.operatorClicked = false;
    }
}

function equalFunc() {
    if(calculator.operator === '+') {
        calculator.displayValue = parseFloat(calculator.previous) + parseFloat(calculator.current);
        updateDisplay();
    } else if(calculator.operator === '-') {
        calculator.displayValue = parseFloat(calculator.previous) - parseFloat(calculator.current);
        updateDisplay();
    } else if(calculator.operator === '/') {
        calculator.displayValue = parseFloat(calculator.previous) / parseFloat(calculator.current);
        updateDisplay();
    } else if(calculator.operator === '*') {
        calculator.displayValue = parseFloat(calculator.previous) * parseFloat(calculator.current);
        updateDisplay();
    }
    calculator.current = calculator.displayValue;

    console.log(calculator);
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