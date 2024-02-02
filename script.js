// Task 1: Display full name in an h1 element with specified styles
const fullName = "REYNOLD OCAMPO";
const h1 = document.createElement("h1");
h1.textContent = fullName;
h1.style.textAlign = "center";
h1.style.color = "#A9A9A9";
document.body.appendChild(h1);

document.addEventListener("DOMContentLoaded", function () {
  // Task 2: Append two input elements, a button, and set up event listener for the button
  var input1 = document.createElement("input");
  input1.type = "text";
  input1.id = "input1";

  var input2 = document.createElement("input");
  input2.type = "text";
  input2.id = "input2";

  var button = document.createElement("button");
  button.textContent = "Find Sum";
  button.addEventListener("click", Sum);

  var container = document.createElement("div");
  container.style.textAlign = "center";

  var result = document.createElement("div");
  result.id = "result";

  var space = document.createTextNode("\u00A0");
  document.body.appendChild(container);
  container.appendChild(input1);
  container.appendChild(space);
  container.appendChild(input2);
  container.appendChild(space.cloneNode());
  container.appendChild(button);

  document.body.style.background = "linear-gradient(to right, #ffecd2, #fcb69f)";
  document.body.style.fontFamily = "Arial, sans-serif";
  document.body.style.margin = "0";
  document.body.style.padding = "20px";
});

function Sum() {
  // Task 3: Reset error messages, result, and input borders
  resetError();
  resetResult();
  resetBorders();

  var value1 = document.getElementById("input1").value;
  var value2 = document.getElementById("input2").value;

  try {
    // Task 4: Try to parse input values as numbers, handle validation, and display the sum
    var number1 = parseFloat(value1);
    var number2 = parseFloat(value2);

    if (isNaN(number1) || isNaN(number2)) {
      throw new Error("Invalid! Enter Valid Numbers.");
    }
    document.getElementById("input1").style.border = "1px solid green";
    document.getElementById("input2").style.border = "1px solid green";

    var sum = number1 + number2;

    showResult("The sum is: " + sum);
  } catch (error) {
    // Task 4 (continued): Handle errors, display error message, and set input borders to red
    var errorMessage = document.createElement("div");
    errorMessage.id = "error-message";
    errorMessage.style.color = "red";
    errorMessage.style.textAlign = "center";
    errorMessage.innerHTML = "<br>" + "Error: " + error.message;

    input1.style.border = "1px solid red";
    input2.style.border = "1px solid red";

    document.body.appendChild(errorMessage);
  }
}

function resetBorders() {
  // Task 3 (continued): Reset input borders
  var input1 = document.getElementById("input1");
  var input2 = document.getElementById("input2");
  input1.style.border = "";
  input2.style.border = "";
}

function resetError() {
  // Task 3 (continued): Remove existing error messages
  var errorMsg = document.getElementById("error-message");
  if (errorMsg) {
    errorMsg.remove();
  }
}

function resetResult() {
  // Task 3 (continued): Remove existing result messages
  var resultMsg = document.getElementById("result");
  if (resultMsg) {
    resultMsg.remove();
  }
}

function showResult(resultMessage) {
  // Task 4 (continued): Display result message
  var resultMsg = document.createElement("div");
  resultMsg.id = "result";
  resultMsg.style.textAlign = "center";
  resultMsg.innerHTML = "<br>" + resultMessage;

  document.body.appendChild(resultMsg);
}
