const button = document.getElementById("button");

button.addEventListener("click", () => {
    document.body.style.backgroundColor = '#' + (Math.random() * 0x1000000 << 0).toString(16).padStart(6, '0');
});