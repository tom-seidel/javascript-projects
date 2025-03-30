document.addEventListener("DOMContentLoaded", () => {

    const button = document.getElementById("button");
    const body = document.body;

    // Check if user has dark mode as system setting
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Check Local Storage or fallback for System-Setting
    if (localStorage.getItem("darkMode") === "enabled" || (!localStorage.getItem("darkMode") && prefersDarkMode)) {
        body.classList.add("dark-mode");
    }

    // Toggle Dark Mode on button click
    button.addEventListener("click", () => {
        console.log("Button clicked!");
        body.classList.toggle("dark-mode");

        // Save to local storage
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });

});