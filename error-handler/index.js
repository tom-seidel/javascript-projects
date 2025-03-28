const numberOne = document.getElementById("numberOne");
const numberTwo = document.getElementById("numberTwo");
const button = document.getElementById("button");
const output = document.getElementById("output");

button.addEventListener("click", () => {
    const one = parseFloat(numberOne.value); // number from number field one
    const two = parseFloat(numberTwo.value); // number from number field two
    
    if(isNaN(one) || isNaN(two)) {
        output.textContent = "Result: Please enter valid numbers!";
        output.style.color = "red";
        return;
    }

    if(two === 0) {
        output.textContent = "Result: Divisio by 0 is not allowed!";
        output.style.color = "red";        
        return;
    }

    output.textContent = `Result: ${one / two}`;
});