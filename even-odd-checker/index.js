// 1. Get the elements
var inputField = document.getElementById("numberInput");
var button = document.getElementById("checkButton");
var outputDiv = document.getElementById("output");

// 2. Event Listener for button click

button.addEventListener("click", function() {

    var input = parseInt(inputField.value); // number from input field

    if (isNaN(input)) {
        outputDiv.textContent = "That's not a valid number!";
        return;
    }

    if (input % 3 == 0) {
        outputDiv.textContent = "Fizz";
    }
    else if (input % 2 == 0) {
        outputDiv.textContent = "The number is even!";
    }
    else {
        outputDiv.textContent = "The number is odd!";
    }

});