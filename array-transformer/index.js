const output = document.getElementById("output");
const numbers = [12, 22, 3, 7, 19];

//output.textContent = numbers.map(num => num * 2).filter(num => num > 10).sort((a,b) => b - a).join(" ");

output.textContent = numbers.map(num => num * num).filter(num => num > 20).join(", ");