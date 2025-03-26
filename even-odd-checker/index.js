// 1. Get the elements
var input = document.getElementById("numberInput");
var button = document.getElementById("checkButton");
var output = document.getElementById("output");

// 2. Event Listener for button click

button.addEventListener("click", function() {

    var number = parseInt(input.value); // number from number field

    if (isNaN(number)) {
        output.textContent = "That's not a valid number!";
        output.style.color = "red";
        return;
    }
    else if (number % 2 == 0) {
        output.textContent = "The number is even!";
        output.style.color = "green";
    }
    else {
        output.textContent = "The number is odd!";
        output.style.color = "blue";
    }

});