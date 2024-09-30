// Wait for the DOM to fully load before attaching event listeners
document.addEventListener("DOMContentLoaded", function () {
    const outputContainer = document.getElementById("output-container");

// Select the input button with id "run-count"
const runButton = document.getElementById("run-count");

// Function to check divisibility
function checkDivision(number, divisor) {
    return number % divisor === 0;
    }

// Add event listener to the button to trigger on click
runButton.addEventListener("click", function (event) {
    // Clear previous output if any
    outputContainer.innerHTML = "";

    // Show the output container after click
    outputContainer.style.display = "block";

    // Declare variables for the divisors
    const firstDivisor = 3;
    const secondDivisor = 5;
    const countNumber = 140;

    // Generate the lines based on the input number
    for (let i = 1; i <= countNumber; i++) {
        const line = document.createElement("p");

        // Check divisibility using the checkDivision function
        if (checkDivision(i, firstDivisor) && checkDivision(i, secondDivisor)) {
            line.textContent = `${i}. Tenacious Raccoon`;
        } else if (checkDivision(i, firstDivisor)) {
            line.textContent = `${i}. Tenacious`;
        } else if (checkDivision(i, secondDivisor)) {
            line.textContent = `${i}. Raccoon`;
        } else {
            line.textContent = `${i}. Timothy Rutkowski's`;
        }

        // Append the line to the output container
        outputContainer.appendChild(line);
        }
    });
});
