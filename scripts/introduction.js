document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("intro-form");
    const outputContainer = document.getElementById("intro-output-container");
    const defaultPhoto = document.getElementById("default-photo").value;

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from refreshing the page

        // Get form values
        const name = document.getElementById("name").value.trim();
        const primaryPlatform = document.getElementById("primary-platform").value.trim();
        const personalBackground = document.getElementById("personal-background").value.trim();
        const professionalBackground = document.getElementById("professional-background").value.trim();
        const academicBackground = document.getElementById("academic-background").value.trim();
        const backgroundSubject = document.getElementById("background-subject").value.trim();

        // Courses
        const web115CourseName = document.getElementById("web115-course").value.trim();
        const web115Reason = document.getElementById("web115-why").value.trim();
        const web140CourseName = document.getElementById("web140-course").value.trim();
        const web140Reason = document.getElementById("web140-why").value.trim();

        // Photo and Caption
        const photoInput = document.getElementById("photo").files[0];
        const photoURL = photoInput ? URL.createObjectURL(photoInput) : defaultPhoto;
        const photoCaption = document.getElementById("photo-caption").value.trim();

        // Update output container with data
        outputContainer.innerHTML = `
            <h2>${name}</h2>
            <img id="output-photo" src="${photoURL}" alt="Uploaded or Default Photo" width="254" height="449">
            <p id="photo-caption">${photoCaption}</p><style>#photo-caption {font-style: italic; text-align: center;}</style>
            <p><strong>Primary Computer Platform:</strong> ${primaryPlatform}</p>
            <p><strong>Personal Background:</strong> ${personalBackground}</p>
            <p><strong>Professional Background:</strong> ${professionalBackground}</p>
            <p><strong>Academic Background:</strong> ${academicBackground}</p>
            <p><strong>Background in this Subject:</strong> ${backgroundSubject}</p>
            <p><strong>${web115CourseName}:</strong> ${web115Reason}</p>
            <p><strong>${web140CourseName}:</strong> ${web140Reason}</p>
        `;

        // Show output container
        outputContainer.style.display = "block";
    });

    form.addEventListener("reset", function () {
        // Hide the output container on form reset
        outputContainer.style.display = "none";
    });
});
