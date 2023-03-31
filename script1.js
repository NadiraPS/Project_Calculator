// agar layar dapat menampilkan angka yg benar saat diklik
// code khusus untuk class calculator-screen doang
const calculatorScreen = document.querySelector(".calculator-screen");
// function updateScreen untuk memperbarui nilai
const updateScreen = (number) => {
  calculatorScreen.value = number;
};
const numbers = document.querySelectorAll(".number");
// jalankan function updateScreen dengan argument event.target.value saat tombol di klik
numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputScreen(event.target.value);
    updateScreen(currentNumber);
  });
});

// code untuk menyimpan angka2 dan operator untuk melakukan kalkulasi
let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";

const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  });
});

const inputOperator = (operator) => {
  prevNumber = currentNumber;
  calculationOperator = operator;
  currentNumber = "";
};

const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currentNumber);
});

const calculate = () => {
  let result = "";
  switch (calculationOpertor) {
    case "+":
      result = parseInt(prevNumber) + parseInt(currentNumber);
      break;
    case "-":
      result = parseInt(prevNumber) - parseInt(currentNumber);
      break;
    case "*":
      result = prevNumber * currentNumber;
      break;
    case "/":
      result = prevNumber / currentNumber;
      break;
    default:
      return;
  }
  currentNumber = result;
  calculationOperator = "";
};
