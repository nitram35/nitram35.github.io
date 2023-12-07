// Define DOM Element
// document = i want to go in the html document
const toggleButton = document.querySelector("#toggle-button");
const root = document.querySelector(":root");
const storageKey = "color-mode";
const defaultMode = "light-mode";

// Define function
// Load the color mode from local storage
function loadColorMode() {
    const colorMode = localStorage.getItem(storageKey);
    root.classList.add(colorMode || defaultMode);
    updateToggleButton();
}
loadColorMode(); // the function load each time the page is loaded

// Toggle the color mode

toggleButton.addEventListener("click", () => {
    //the function load each time we click
    saveColorMode();
});

// Save the color mode to local storage
function saveColorMode() {
    // check if the root element has the class dark-mode. If yes, the current mode switch to light and vice versa
    const currentMode = root.classList.contains("dark-mode") ? "light-mode" : "dark-mode";
    // We remove old class 
    root.classList.remove("light-mode", "dark-mode");
    // and add the new one next
    root.classList.add(currentMode);
    localStorage.setItem(storageKey, currentMode);
    updateToggleButton();
}

function updateToggleButton() {
    if (root.classList.contains("dark-mode")) {
        toggleButton.style.backgroundImage = "var(--moon)";
    } else {
        toggleButton.style.backgroundImage = "var(--sun)";
    }
}