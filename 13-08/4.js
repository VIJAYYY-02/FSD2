


function cal(a, b, operator) {
  let result;

  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = b !== 0 ? a / b : "Error: Division by zero";
      break;
    default:
      result = "Invalid operator";
  }

  return result;
}

console.log(cal(10, 0, "/"));