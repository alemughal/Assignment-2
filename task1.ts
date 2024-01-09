// Type of Callback function

type callback = (result: number) => void;

// Calculate function

function calculate(num1: number, num2: number, operation: string, Callback: callback) {
    if (operation === 'add') {
        Callback(num1 + num2);
    } else if (operation === 'sub') {
        Callback(num1 - num2);
    } else if (operation === 'mul') {
        Callback(num1 * num2);
    } else if (operation === 'div') {
        Callback(num1 / num2);
    } else {
        Callback(0);
    }
}

// Add function

calculate(1, 2, 'add', (result) => {
    console.log(result);
});


// Sub function

calculate(1, 2, 'sub', (result) => {
    console.log(result);
});


// Mul function

calculate(1, 2, 'mul', (result) => {
    console.log(result);
});


// Div function


calculate(1, 2, 'div', (result) => {
    console.log(result);
});
