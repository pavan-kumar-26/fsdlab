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
    if (b === 0) {
      return "Error: Division by zero is not allowed!";
    }
    return a / b;
  }
  
  const num1 = parseFloat(prompt("Enter the first number:"));
  const num2 = parseFloat(prompt("Enter the second number:"));
  const operation = prompt("Choose  add, subtract, multiply, divide");
  let result;
  switch (operation.toLowerCase()) {
    case "add":
      result = add(num1, num2);
      break;
    case "subtract":
      result = subtract(num1, num2);
      break;
    case "multiply":
      result = multiply(num1, num2);
      break;
    case "divide":
      result = divide(num1, num2);
      break;
    default:
      result = "Invalid operation!";
  }
  
  
  console.log(`Result: ${result}`);
  