// Wait for the DOM to fully load before attaching event listeners
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const greeting = document.getElementById("greeting");
    const outputContainer = document.getElementById("output-container");

    // Listen for submit
    form.addEventListener("submit", function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the input values
        const firstName = document.getElementById("first-name").value;
        const middleInitial = document.getElementById("middle-initial").value;
        const lastName = document.getElementById("last-name").value;
        const count = document.getElementById("count").value;
        const firstDivisor = document.getElementById("first-divisor").value;
        const secondDivisor = document.getElementById("second-divisor").value;
        const thirdDivisor = document.getElementById("third-divisor").value;
        const firstWord = document.getElementById("first-word").value;
        const secondWord = document.getElementById("second-word").value;
        const thirdWord = document.getElementById("third-word").value;

        // Create a personalized greeting
        let fullName = firstName;
        if (middleInitial) {
            fullName += " " + middleInitial + ".";
        }
        if (lastName) {
            fullName += " " + lastName;
        }

        // Update the greeting text
        greeting.textContent = `Fizz Buzz 4 | Welcome to Tenacious Raccoon, ${fullName}!`;

        // Clear previous output if any
        outputContainer.innerHTML = "";

        // Show output container after click
        outputContainer.style.display = "block";

        // Function to check divisibility
        function checkDivision(number, divisor) {
            return number % divisor === 0;
        }

        // Generate the lines based on the input number
        for (let i = 1; i <= count; i++) {
            const line = document.createElement("p");
            let output = "";

            // Check divisibility using the checkDivision function
            if (checkDivision(i, firstDivisor) && checkDivision(i, secondDivisor) && checkDivision(i, thirdDivisor)) {
                output = `${firstWord} ${secondWord} ${thirdWord}`;
            } else if (checkDivision(i, firstDivisor) && checkDivision(i, secondDivisor)) {
                output = `${firstWord} ${secondWord}`;
            } else if (checkDivision(i, firstDivisor) && checkDivision(i, thirdDivisor)) {
                output = `${firstWord} ${thirdWord}`;
            } else if (checkDivision(i, secondDivisor) && checkDivision(i, thirdDivisor)) {
                output = `${secondWord} ${thirdWord}`;
            } else if (checkDivision(i, firstDivisor)) {
                output = firstWord;
            } else if (checkDivision(i, secondDivisor)) {
                output = secondWord;
            } else if (checkDivision(i, thirdDivisor)) {
                output = thirdWord;
            } else {
                // Display blank for non-divisible numbers
                output = ""; // Empty string for non-divisible numbers
            }

            // Set line content only if there's output
            if (output !== "") {
                line.textContent = `${i}. ${output}`;
            } else {
                line.textContent = `${i}.`;
            }

            // Append the line to the output container
            outputContainer.appendChild(line);
        }
    });
});
