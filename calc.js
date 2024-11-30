const numberBtns = document.querySelectorAll(".number-btn");
const inputDisplay = document.querySelector(".input-display");
const operatorBtns = document.querySelectorAll(".operator-btn");
const equalsBtn = document.querySelector(".equals-btn");
const allClear = document.querySelector(".ac-btn");
const delBtn = document.querySelector(".del-btn");
const maxDigits = 15;
function add(num1, num2) {
  return Number(num1) + Number(num2);
}
function subtract(num1, num2) {
  return Number(num1) - Number(num2);
}
function multiply(num1, num2) {
  return Number(num1) * Number(num2);
}
function divide(num1, num2) {
  return Number(num1) / Number(num2);
}
let operand1 = "";
let operand2 = "";
let operator = "";
numberBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    value = event.target.textContent;
    if (inputDisplay.textContent.includes(".") && value == ".") return;
    else if (inputDisplay.textContent.length < maxDigits)
      inputDisplay.textContent += value;
  });
});

operatorBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    value = event.target.textContent;
    operand1 = inputDisplay.textContent;
    operator = value;
    inputDisplay.textContent = "";
  });
});

equalsBtn.addEventListener("click", () => {
  operand2 = inputDisplay.textContent;
  switch (operator) {
    case "+":
      inputDisplay.textContent = add(operand1, operand2);
      if (inputDisplay.textContent.length >= maxDigits) {
        inputDisplay.textContent = Number(inputDisplay.textContent).toPrecision(
          maxDigits - 5
        );
      }
      break;
    case "-":
      inputDisplay.textContent = subtract(operand1, operand2);
      if (inputDisplay.textContent.length >= maxDigits) {
        inputDisplay.textContent = Number(inputDisplay.textContent).toPrecision(
          maxDigits - 5
        );
      }
      break;
    case "*":
      inputDisplay.textContent = multiply(operand1, operand2);
      if (inputDisplay.textContent.length >= maxDigits) {
        inputDisplay.textContent = Number(inputDisplay.textContent).toPrecision(
          maxDigits - 5
        );
      }
      break;
    case "/":
      inputDisplay.textContent = divide(operand1, operand2);
      if (inputDisplay.textContent.length >= maxDigits) {
        inputDisplay.textContent = Number(inputDisplay.textContent).toPrecision(
          maxDigits - 2
        );
      }
      break;
  }
});

allClear.addEventListener("click", () => {
  inputDisplay.textContent = "";
  operand1 = "";
  operand2 = "";
  operator = "";
});

delBtn.addEventListener("click", () => {
  inputDisplay.textContent = inputDisplay.textContent.slice(0, -1);
  for (let i = -1; i >= inputDisplay.textContent.length * -1; i--) {
    if (isNaN(Number(inputDisplay.textContent.at(-1)))) {
      inputDisplay.textContent = inputDisplay.textContent.slice(0, -1);
    }
  }
});
