document.addEventListener("DOMContentLoaded", () => {

    const button = document.getElementById("button");
    const body = document.body;

    // Check if user has dark mode as system setting
    //const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDarkMode = localStorage.getItem("darkMode") === "enabled" || 
                      (!localStorage.getItem("darkMode") && prefersDarkMode);

    // Set initial mode
    if (isDarkMode) {
        body.classList.add("dark-mode");
    }

    // Update button text
    const updateButton = () => {
        button.textContent = body.classList.contains("dark-mode") 
            ? "☀️ Light Mode" 
            : "🌙 Dark Mode";
    };

    // Set initials button text
    updateButton();

    // Toggle function
    button.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        localStorage.setItem("darkMode", body.classList.contains("dark-mode") ? "enabled" : "disabled");
        updateButton(); // Button-Text nach jedem Klick aktualisieren
    });

});