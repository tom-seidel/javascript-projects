const button = document.getElementById("button");
const output = document.getElementById("output");

button.addEventListener("click", () => {
    var color = '#' + (Math.random() * 0x1000000 << 0).toString(16).padStart(6, '0');
    document.body.style.backgroundColor = color;
    output.textContent = color;
});