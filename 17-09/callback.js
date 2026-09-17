// Anonymous functions 
let add = function(a, b) {
    return a + b;
};

let subtract = function(a, b) {
    return a - b;
};

let multiply = function(a, b) {
    return a * b;
};

let divide = function(a, b) {
    return b !== 0 ? a / b : "Cannot divide by zero";
};

// Example 
console.log("Add: " + add(10, 5));        // 15
console.log("Subtract: " + subtract(10, 5)); // 5
console.log("Multiply: " + multiply(10, 5)); // 50
console.log("Divide: " + divide(10, 5));     // 2
