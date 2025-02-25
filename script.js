const calculatorForm = document.getElementById("calculator-form");
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const operatorSelect = document.getElementById("operator");
const resultOutput = document.getElementById("result");
const calculateButton = document.getElementById("calculate");

calculateButton.addEventListener("click", calculate);

function calculate() {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const operator = operatorSelect.value;

  if (operator === "+") {
    resultOutput.value = num1 + num2;
  } else if (operator === "-") {
    resultOutput.value = num1 - num2;
  } else if (operator === "*") {
    resultOutput.value = num1 * num2;
  } else if (operator === "/") {
    if (num2 !== 0) {
      resultOutput.value = num1 / num2;
    } else {
      resultOutput.value = "Error! Division by zero is not allowed.";
    }
  }
}