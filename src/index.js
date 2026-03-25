// Sample application file
// This file exists to demonstrate the merge and release workflow

const APP_VERSION = '1.0.0';

function greet(name) {
    return `Hello, ${name}! Welcome to version ${APP_VERSION}`;
}

function add(a, b) {
    return a + b;
}

module.exports = { greet, add, APP_VERSION };
