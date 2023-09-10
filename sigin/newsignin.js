

// Function to handle the login
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if the admin is logging in
    if (email === 'humaira123@gmail.com' && password === '123qwe') {
        // Redirect to the admin folder
        window.location.href = '../student info/index.html';
        return;
    }

    // Check if the user is already signed up with Firebase
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
           
            const user = userCredential.user;
            if (user) {
               
                const userRole = user.role; 
                if (userRole === 'admin') {
                    window.location.href = '../student info/index.html';
                } else if (userRole === 'student') {
                    window.location.href = './sigup/index.html';
                } else {
                   
                    window.location.href = './new admission/index.html';
                }
            }
        })
        .catch((error) => {
            alert('you cannot have access here first signup !!');
            console.error(error);
        });
}
