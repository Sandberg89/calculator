let displayElement = document.getElementById("display");
let display = "";
const numberBtns = document.getElementsByClassName("numb");
const btnArray = Array.from(numberBtns);
const opsBtns = document.getElementsByClassName("ops");
const opsArray = Array.from(opsBtns);
let clearBtn = document.getElementById("cls");
let tempNumber = "";
let operation = "";

// functions
function operate(operator, a, b) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  } else if (operator === "%") {
    return modulus(a, b);
  }
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
  return a / b;
}

function modulus(a, b) {
  return a % b;
}

btnArray.forEach((element) => {
  element.addEventListener("click", (e) => {
    let btnValue = e.target.innerText;
    if (btnValue == "," && display == "") {
      display += "0" + btnValue;
      displayElement.innerText = display;
    } else if (display == "0" && btnValue != ',') {
      display = btnValue;
      displayElement.innerText = display;
    } else {
      display += btnValue;
      displayElement.innerText = display;
    }
  });
});

opsArray.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (tempNumber == "") {
      tempNumber = display;
      display = "";
      operation = e.target.innerText;
      console.log(`display: ${display}, tempNumber: ${tempNumber}`);
    } else {
      tempNumber = operate(
        operation,
        parseFloat(tempNumber),
        parseFloat(display)
      );
      displayElement.innerText = tempNumber;
      display = "";
      operation = e.target.innerText;
      console.log(`display: ${display}, tempNumber: ${tempNumber}`);
    }
  });
});

clearBtn.addEventListener("click", () => {
  tempNumber = "";
  display = "";
  displayElement.innerText = display;
});
