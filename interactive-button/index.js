var input = document.getElementById("input");
var button = document.getElementById("button");
var output = document.getElementById("output");

button.addEventListener("click", function() {

    var number = parseInt(input.value); // converts string to number

    if(isNaN(number)) {
        output.textContent = "This is not a number!";
    }
    else {
        output.textContent = number;
    }

});