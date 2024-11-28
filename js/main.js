let count = localStorage.getItem("counter") ? parseInt(localStorage.getItem("counter")) : 0;

const screen = document.querySelector("#screen");
const incrementBtn = document.querySelector("#increment");
const decrementBtn = document.querySelector("#decrement");
const resetBtn = document.querySelector("#reset");

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

// Initialize the counter display from localStorage
updateScreen();
