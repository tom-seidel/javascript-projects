const number = document.getElementsByClassName("number")[0].innerHTML;

console.log(number);

if(number % 2 == 0) {
    console.log("The number is even!");
}
else {
    console.log("The number is odd!");
}