function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    // Save dark mode state to localStorage
    localStorage.setItem("darkMode", body.classList.contains("dark-mode"));

    console.log("Dark Mode Toggled:", body.classList.contains("dark-mode"));
}

// Apply dark mode on page load if saved in localStorage
if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
    console.log("Dark Mode Applied on Page Load");
}
