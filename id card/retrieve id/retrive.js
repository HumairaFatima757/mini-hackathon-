const db = firebase.database();
        const rollNumberInput = document.getElementById("rollNumberInput");
        const retrieveIDCardBtn = document.getElementById("retrieveIDCard");
        const idCard = document.getElementById("idCard");
        const studentDetails = document.getElementById("studentDetails");

        retrieveIDCardBtn.addEventListener("click", () => {
            const rollNumber = rollNumberInput.value;

            if (rollNumber) {
                // Query Firebase to retrieve student information
                const studentRef = db.ref("students").orderByChild("rollNumber").equalTo(rollNumber);

                studentRef.once("value", (snapshot) => {
                    const studentData = snapshot.val();

                    if (studentData) {
                        // Display student details on the ID card
                        const student = Object.values(studentData)[0]; // Assuming unique roll numbers
                        studentDetails.innerHTML = `
                        <h3>${student.name}</h3>
                        <p>Father's Name: ${student.fatherName}</p>
                        <p>Roll Number: ${student.rollNumber}</p>
                        <img id="studentImage" src="${student.imageURL}" alt="Student Image" style="max-width: 100px; max-height: 100px;">
                    `;
                    
                    // Show the ID card UI
                    idCard.classList.remove("hidden");
                    } else {
                        alert("Student with the provided roll number not found.");
                    }
                });
            } else {
                alert("Please enter a roll number.");
            }
        });




// Retrieve ID card logic
retrieveIDCardBtn.addEventListener("click", () => {
    const rollNumber = rollNumberInput.value;

    if (rollNumber) {
        // Query Firebase to retrieve student information
        const studentRef = db.ref("students").orderByChild("rollNumber").equalTo(rollNumber);

        studentRef.once("value", (snapshot) => {
            const studentData = snapshot.val();

            if (studentData) {
                // Display student details on the ID card
                const student = Object.values(studentData)[0]; // Assuming unique roll numbers
                studentDetails.innerHTML = `
                    <h3>${student.name}</h3>
                    <p>Father's Name: ${student.fatherName}</p>
                    <p>Roll Number: ${student.rollNumber}</p>
                    <img id="studentImage" src="${student.imageURL}" alt="Student Image" style="max-width: 150px; max-height: 150px;>
                `;

                // Show the ID card UI
                idCard.classList.remove("hidden");

                // Check if the image element already exists
                const existingImage = document.getElementById("studentImage");

                if (!existingImage) {
                    // Create a new image element and add it to the studentDetails div
                    const newImage = document.createElement("img");
                    newImage.id = "studentImage";
                    newImage.src = student.imageURL;
                    newImage.alt = "Student Image";
                    studentDetails.appendChild(newImage);
                }
            } else {
                alert("Student with the provided roll number not found.");
            }
        });
    } else {
        alert("Please enter a roll number.");
    }
});
