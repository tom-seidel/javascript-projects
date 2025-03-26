const numbers = [12, 22, 3, 7, 19];
const output = document.getElementById("output");

output.textContent = numbers.map(num => num *2).filter(num => num > 10).sort((a,b) => b - a).join(" ");