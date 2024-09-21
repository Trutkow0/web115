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

                // Check if the number is divisible by 3, 5, or both
                if (i % 3 === 0) {
                    line.textContent = `${i}. Tenacious`;
                } if else (i % 5 === 0) {
                    line.textContent = `${i}. Raccoon`;
                } if else (i % 3 && 5 === 0) {
                    line.textContent = `${i} Tenacious Raccoon`
                }else {
                    line.textContent = `${i}. Timohty Rutkowski's`;
                }

                // Append the line to the output container
                outputContainer.appendChild(line);
        }
    });
});
