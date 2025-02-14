document.addEventListener("DOMContentLoaded", () => {
    const checkbox = document.getElementById("switch");
    const body = document.body;

    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        checkbox.checked = true; 
    }
    
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            body.classList.add("dark-mode");
            localStorage.setItem("dark-mode", "enabled");
        } else {
            body.classList.remove("dark-mode");
            localStorage.setItem("dark-mode", "disabled");
        }
    });
});