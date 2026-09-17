// // Arrow functions 
// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;
// const multiply = (a, b) => a * b;
// const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");



// // Usage
// console.log("Add:", add(10, 5));       // 15
// console.log("Subtract:", subtract(10, -5));  // 5
// console.log("Multiply:", multiply(10, 5));  // 50
// console.log("Divide:", divide(10, 5));    // 2

const start = (fun, a, b) => fun(a, b);

console.log(typeof start);   // "function"
console.log(typeof 'start'); // "string"
console.log(add instanceof Function);