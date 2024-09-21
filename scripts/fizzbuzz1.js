// Wait for the DOM to fully load before attaching event listeners
document.addEventListener("DOMContentLoaded", function () {
    const outputContainer = document.getElementById("output-container");

    //Select the input button with id "run-count"
        const runButton = document.getElementById("run-count");

        // Add event listener to the button to trigger on click
        runButton.addEventListener("click", function (event) {

            // Clear previous output if any
            outputContainer.innerHTML = "";

            //Show the output continainer after click
            outputContainer.style.display = "block";

            // Declare countNumber as 140
            const countNumber = 140;
        
            // Generate the lines based on the input number
            for (let i = 1; i <= countNumber; i++) {
                const line = document.createElement("p");

                // Check if the number is divisible by 3
                if (i % 3 === 0) {
                    line.textContent = `${i}. Raccoon`;
                } else {
                    line.textContent = `${i}. Tenacious`;
                }

                // Append the line to the output container
                outputContainer.appendChild(line);
        }
    });
});
