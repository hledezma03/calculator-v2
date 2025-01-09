const displayText = document.querySelector('.display-text');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clearBtn = document.querySelector('.clear-btn');
const equalBtn = document.querySelector('.equal-btn')

let num1 = null;
let num2 = null;
let sign = null;
let result = null;

function add(a,b) {
        return a + b;
};

function substract(a,b) {
    return a-b;
};

function multiply(a,b) {
    return a*b;
};

function divide(a,b) {
    return a/b;
};

function operation(a,b,operator) {
    switch (operator) {
        case '+':
            return add(a,b);
        case '-':
            return substract(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            return divide(a,b);
    };
};

numbers.forEach(number => {
    number.addEventListener("click", () => {
        if (sign === null) {
            if (num1 === null) {
                num1 = number.textContent;
            } else {
                if (num1.length <= 18) {
                    num1 += number.textContent;
                }
            }
            displayText.textContent = num1;
        } else {
            if (num2 === null) {
                num2 = number.textContent;
            } else {
                if (num2.length <= 18) {
                    num2 += number.textContent;
                }
            }
            displayText.textContent = num2
        }
    });
});


operators.forEach(operator => {
    operator.addEventListener("click", () => {
        if (num1 !== null && num2 !== null) {
            result = operation(parseFloat(num1), parseFloat(num2), sign);
            displayText.textContent = result;
            num1 = result;
            sign = operator.textContent;
            num2 = null;
        } else if (num1 !== null && sign === null){
            sign = operator.textContent;
        } else if (num1 !== null && sign !== null) {
            sign = operator.textContent;
        }
    })
})



clearBtn.addEventListener('click', () => {
    displayText.textContent = '0';
    num1 = null;
    num2 = null;
    sign = null;
});

equalBtn.addEventListener('click', () => {
    if (num1 && sign) {
        result = operation(num1, num2, sign);
        displayText.textContent = result;
        num1 = result;
        num2 = null;
        sign = null;
    }
})
