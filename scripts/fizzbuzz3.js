// Wait for the DOM to fully load before attaching event listeners
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("name-form");
    const greeting = document.getElementById("greeting");
    const outputContainer = document.getElementById("output-container");

        //Listen for submit
        form.addEventListener("submit", function (event) {
            // Prevent the default form submission behavior
            event.preventDefault();

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
                    greeting.textContent = `Fizz Buzz 3 | Welcome to Tenacious Raccoon, ${fullName}!`;

                        // Prompt the user for a number, using the entered first name
                        let countNumber = prompt(`How high do you want to count, ${firstName}?`);

                            // Convert the input to a number
                            countNumber = parseInt(countNumber);

                                // Clear previous output if any
                                outputContainer.innerHTML = "";

                            // Show output container after click
                            outputContainer.style.display="block";

                        // Function to check divisibility
                        function checkDivision(number, divisor) {
                            return number % divisor === 0;
                        }

                    // Declare variables for the divisors
                    const firstDivisor = 3;
                    const secondDivisor = 5;
                    const thirdDivisor = 7;

                // Generate the lines based on the input number
                for (let i = 1; i <= countNumber; i++) {
                    const line = document.createElement("p");

            // Check divisibility using the checkDivision function
            if (checkDivision(i, firstDivisor) && checkDivision(i, secondDivisor) && checkDivision(i, thirdDivisor)) {
                line.textContent = `${i}. ${firstName} ${middleInitial}. ${lastName}`;
            } else if (checkDivision(i, firstDivisor) && checkDivision(i, secondDivisor)) {
                line.textContent = `${i}. ${firstName} ${middleInitial}.`;      
            } else if (checkDivision(i, firstDivisor) && checkDivision(i, thirdDivisor)) {
                line.textContent = `${i}. ${firstName} ${lastName}`;
            } else if (checkDivision(i, secondDivisor) && checkDivision(i, thirdDivisor)) {
                line.textContent = `${i}. ${middleInitial}. ${lastName}`;
            } else if (checkDivision(i, firstDivisor)) {
                line.textContent = `${i}. ${firstName}`;
            } else if (checkDivision(i, secondDivisor)) {
                line.textContent = `${i}. ${middleInitial}.`;
            } else if (checkDivision(i, thirdDivisor)) {
                line.textContent = `${i}. ${lastName}`;
            } else {
                line.textContent = `${i}. Fizz Buzz 3`;
            }

        // Append the line to the output container
        outputContainer.appendChild(line);
        }
    });
});
