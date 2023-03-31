// code merubah angka yg ada di tampilan
const calculatorScreen = document.querySelector(".calculator-screen");
const updateScreen = (number) => {
  calculatorScreen.value = number;
};

// code untuk menyimpan 2 angka dan sebuah operator
let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";

// code untuk menampilkan angka
const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

// code agar awalan tidak 0 dan bisa input lebih dari 1 digit
const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

// code untuk tombol operator
const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
    // updateScreen(currentNumber);
    updateScreen(calculationOperator);
  });
});

const inputOperator = (operator) => {
  if (calculationOperator === "") {
    prevNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = "0";
};

// code mengaktifkan fungsi kalkulasi ke kalkulator
const equalSign = document.querySelector(".equal-sign");
equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currentNumber);
});

const calculate = () => {
  let result = "";
  switch (calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseFloat(prevNumber) - parseFloat(currentNumber);
      break;
    case "*":
      result = parseFloat(prevNumber) * parseFloat(currentNumber);
      break;
    case "/":
      result = parseFloat(prevNumber) / parseFloat(currentNumber);
      break;
    default:
      return;
  }
  currentNumber = result;
  calculationOperator = "";
};

// code untuk tombol AC berjalan
const clearBtn = document.querySelector(".all-clear");
clearBtn.addEventListener("click", () => {
  clearAll();
  updateScreen(currentNumber);
});

const clearAll = () => {
  prevNumber = "";
  calculationOperator = "";
  currentNumber = "0";
};

// code untuk mengkalkulasikan angka desimal
const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});
inputDecimal = (dot) => {
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += dot;
};
