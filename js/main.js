let count = localStorage.getItem("counter") ? parseInt(localStorage.getItem("counter")) : 0;

const screen = document.querySelector("#screen");
const incrementBtn = document.querySelector("#increment");
const decrementBtn = document.querySelector("#decrement");
const resetBtn = document.querySelector("#reset");
const setInput = document.querySelector("#set-value");
const setButton = document.querySelector("#set-button");

function updateScreen() {
    screen.textContent = count;
    localStorage.setItem("counter", count); // Save the updated count to localStorage
}

incrementBtn.addEventListener("click", () => {
    count++;
    updateScreen();
});

decrementBtn.addEventListener("click", () => {
    if (count > 0) { // Prevent count from going below 0
        count--;
        updateScreen();
    }
});

resetBtn.addEventListener("click", () => {
    count = 0;
    updateScreen();
});

setButton.addEventListener("click", () => {
    const newValue = parseInt(setInput.value);
    if (!isNaN(newValue) && newValue >= 0) { // Only accept non-negative numbers
        count = newValue;
        updateScreen();
        setInput.value = ""; // Clear the input field
    } else {
        alert("Please enter a valid non-negative number!");
    }
});

// Initialize the counter display from localStorage
updateScreen();
