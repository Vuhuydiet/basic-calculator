const notificationArea = document.getElementById("notificationArea");

document
  .getElementById("firstNumber")
  .addEventListener("blur", validateFirstNumber);
document
  .getElementById("secondNumber")
  .addEventListener("blur", validateSecondNumber);

function validateFirstNumber() {
  const firstNumber = document.getElementById("firstNumber").value;
  if (isNaN(firstNumber) || firstNumber.trim() === "") {
    document.getElementById("firstNumberError").classList.remove("hidden");
    return false;
  } else {
    document.getElementById("firstNumberError").classList.add("hidden");
    return true;
  }
}

function validateSecondNumber() {
  const secondNumber = document.getElementById("secondNumber").value;
  if (isNaN(secondNumber) || secondNumber.trim() === "") {
    document.getElementById("secondNumberError").classList.remove("hidden");
    return false;
  } else {
    document.getElementById("secondNumberError").classList.add("hidden");
    return true;
  }
}

document
  .getElementById("calculatorForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    notificationArea.textContent = "";

    const isFirstValid = validateFirstNumber();
    const isSecondValid = validateSecondNumber();

    if (!isFirstValid || !isSecondValid) {
      notificationArea.textContent = "Please enter two valid decimal numbers.";
      return;
    }

    const firstNumber = parseFloat(
      document.getElementById("firstNumber").value
    );
    const secondNumber = parseFloat(
      document.getElementById("secondNumber").value
    );
    const operation = document.querySelector('input[name="operation"]:checked');
    const resultField = document.getElementById("result");

    if (!operation) {
      notificationArea.textContent = "Please select an operation.";
      return;
    }

    let result;
    switch (operation.value) {
      case "add":
        result = firstNumber + secondNumber;
        break;
      case "subtract":
        result = firstNumber - secondNumber;
        break;
      case "multiply":
        result = firstNumber * secondNumber;
        break;
      case "divide":
        if (secondNumber === 0) {
          notificationArea.textContent = "Cannot divide by zero.";
          return;
        }
        result = firstNumber / secondNumber;
        break;
    }

    resultField.value = result;
  });
