// Sample application file
// This file exists to demonstrate the merge and release workflow

const APP_VERSION = '1.3.0';

function greet(name) {
    return `Hello, ${name}! Welcome to version ${APP_VERSION}`;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) throw new Error('Division by zero');
    return a / b;
}

function power(base, exponent) {
    return Math.pow(base, exponent);
}

function sqrt(n) {
    if (n < 0) throw new Error('Cannot calculate square root of negative number');
    return Math.sqrt(n);
}

module.exports = { greet, add, subtract, multiply, divide, power, sqrt, APP_VERSION };
