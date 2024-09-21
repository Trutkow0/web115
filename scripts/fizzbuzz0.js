// Wait for the DOM to fully load before attaching event listeners
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("name-form");
    const greeting = document.getElementById("greeting");
    const outputContainer = document.getElementById("output-container");

    form.addEventListener("submit", function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Show output container after click
        outputContainer.style.display="block";

        // Get the input values
        const firstName = document.getElementById("first-name").value;
        const middleInitial = document.getElementById("middle-initial").value;
        const lastName = document.getElementById("last-name").value;

        // Create a personalized greeting
        let fullName = firstName;
        if (middleInitial) {
            fullName += " " + middleInitial + ".";
        }
        if (lastName) {
            fullName += " " + lastName;
        }

        // Update the greeting text
        greeting.textContent = `Fizz Buzz 0 | Welcome to Tenacious Raccoon, ${fullName}!`;

        // Prompt the user for a number, using the entered first name
        let countNumber = prompt(`How high do you want to count, ${firstName}?`);

        // Convert the input to a number
        countNumber = parseInt(countNumber);

        // Clear previous output if any
        outputContainer.innerHTML = "";

        // Generate the lines based on the input number
        for (let i = 1; i <= countNumber; i++) {
            const line = document.createElement("p");

            // Check if the number is even or odd
            if (i % 2 === 0) {
                line.textContent = `${i}. Tenacious Raccoon - The number is even.`;
            } else {
                line.textContent = `${i}. Tenacious Raccoon - The number is odd.`;
            }

            // Append the line to the output container
            outputContainer.appendChild(line);
        }
    });
});
