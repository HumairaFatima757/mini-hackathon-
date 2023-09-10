const db = firebase.database();
const rollNumberInput = document.getElementById("rollNumberInput");
const attendanceStatus = document.getElementById("attendanceStatus");
const markAttendanceBtn = document.getElementById("markAttendance");
const changeStatusBtn = document.getElementById("changeStatus");

markAttendanceBtn.addEventListener("click", () => {
    const rollNumber = rollNumberInput.value;
    const status = attendanceStatus.value;
    const classStartTime = new Date().getTime(); // Replace with actual class start time

    if (rollNumber && status) {
        // Check if it's late (10 minutes or more after class start time)
        const currentTime = new Date().getTime();
        const isLate = (currentTime - classStartTime) >= 10 * 60 * 1000;

        if (isLate) {
            // If late, automatically mark as "late"
            status = "late";
        }

        // Store attendance data in Firebase
        const attendanceRef = db.ref(`attendance/${rollNumber}`);
        attendanceRef.push({
            status: status,
            timestamp: currentTime,
        });

        alert(`Attendance marked as "${status}"`);
    } else {
        alert("Please enter a roll number and select a status.");
    }
});

changeStatusBtn.addEventListener("click", () => {
    // Here, you can implement the logic to check for admin password
    const adminPassword = prompt("Enter admin password:");
    if (adminPassword === "humaira123@gmail.com") {
        // Allow status change logic here
        const rollNumber = rollNumberInput.value;
        const status = attendanceStatus.value;
        const classStartTime = new Date().getTime(); // Replace with actual class start time

        if (rollNumber && status) {
            // Check if it's late (10 minutes or more after class start time)
            const currentTime = new Date().getTime();
            const isLate = (currentTime - classStartTime) >= 10 * 60 * 1000;

            if (!isLate) {
                // Only allow changing status if not late
                const attendanceRef = db.ref(`attendance/${rollNumber}`);
                attendanceRef.push({
                    status: status,
                    timestamp: currentTime,
                });

                alert(`Attendance status changed to "${status}"`);
            } else {
                alert("Cannot change status to 'Late' after 10 minutes.");
            }
        } else {
            alert("Please enter a roll number and select a status.");
        }
    } else {
        alert("Admin password is incorrect.");
    }
});