// const db = firebase.database();
// const adminRollNumberInput = document.getElementById("rollNumberInput");
// const adminStatusText = document.getElementById("adminStatusText");
// const adminNewStatusInput = document.getElementById("adminNewStatusInput");
// const updateAttendanceBtn = document.getElementById("updateAttendance");

// // Function to fetch attendance status based on roll number
// function fetchAttendanceStatus(rollNumber) {
//     const attendanceRef = db.ref(`attendance/${rollNumber}`);

//     attendanceRef.on("value", (snapshot) => {
//         const data = snapshot.val();

//         if (data) {
//             // Find the latest attendance record
//             const latestRecord = Object.values(data).pop();
//             const status = latestRecord.status;
//             adminStatusText.textContent = status;
//         } else {
//             adminStatusText.textContent = "Not found";
//         }
//     });
// }

// updateAttendanceBtn.addEventListener("click", () => {
//     const rollNumber = adminRollNumberInput.value;
//     const newStatus = adminNewStatusInput.value;

//     if (rollNumber && newStatus) {
//         // Update student's attendance status in Firebase
//         const attendanceRef = db.ref(`attendance/${rollNumber}`);
//         const currentTime = new Date().getTime();

//         attendanceRef.push({
//             status: newStatus,
//             timestamp: currentTime,
//         });

//         alert(`Attendance status updated as "${newStatus}" for Roll Number ${rollNumber}`);
//     } else {
//         alert("Please enter a roll number and select a new status.");
//     }
// });


// adminRollNumberInput.addEventListener("blur", () => {
//     const rollNumber = adminRollNumberInput.value;
//     fetchAttendanceStatus(rollNumber);
// });







const db = firebase.database();
const adminRollNumberInput = document.getElementById("adminRollNumberInput");
const adminStatusText = document.getElementById("adminStatusText");
const adminNewStatusInput = document.getElementById("adminNewStatusInput");
const updateAttendanceBtn = document.getElementById("updateAttendance");


const getAdmissionStatusBtn = document.getElementById("getAdmissionStatus");


function fetchAttendanceStatus(rollNumber) {
    const attendanceRef = db.ref(`attendance/${rollNumber}`);

    attendanceRef.on("value", (snapshot) => {
        const data = snapshot.val();

        if (data) {
    
            const latestRecord = Object.values(data).pop();
            const status = latestRecord.status;
            adminStatusText.textContent = status;
        } else {
            adminStatusText.textContent = "Not found";
        }
    });
}

updateAttendanceBtn.addEventListener("click", () => {
    const rollNumber = adminRollNumberInput.value;
    const newStatus = adminNewStatusInput.value;

    if (rollNumber && newStatus) {
        
        const attendanceRef = db.ref(`attendance/${rollNumber}`);
        const currentTime = new Date().getTime();

        attendanceRef.push({
            status: newStatus,
            timestamp: currentTime,
        });

        alert(`Attendance status updated as "${newStatus}" for Roll Number ${rollNumber}`);
    } else {
        alert("Please enter a roll number and select a new status.");
    }
});

adminRollNumberInput.addEventListener("blur", () => {
    const rollNumber = adminRollNumberInput.value;
    fetchAttendanceStatus(rollNumber);
});

    const admissionRef = db.ref(`admission/${rollNumber}`);

    admissionRef.on("value", (snapshot) => {
        const data = snapshot.val();

        if (data) {
            // Find the admission status
            const admissionStatus = data.admissionStatus;
            adminStatusText.textContent = admissionStatus;
        } else {
            adminStatusText.textContent = "Not found";
        }
    });

getAdmissionStatusBtn.addEventListener("click", () => {
    const rollNumber = adminRollNumberInput.value;

    if (rollNumber) {
       
        fetchAdmissionStatus(rollNumber);
    } else {
        alert("Please enter a roll number.");
    }
});















