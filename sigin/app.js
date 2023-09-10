
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(function(userCredential) {
                var user = userCredential.user;
                if (user.email === 'humaira123@gmail.com') {
                   
                    window.location.href = '../sigup/index.html';
                } else {
                   
                    // alert('you are not authorize admin')
                    // document.getElementById('error-message').innerHTML= '<button type="submit">Sign In As Student </button> ';
                //    document.getElementById('signInAsStudent').style.display='block';
                   
                
                var shouldDisplayButton = true; // Change this condition as needed

                   // Check the condition and display the button if it's met
                   if (shouldDisplayButton) {
                       document.getElementById('signInAsStudent').style.display = 'block';
                   }
               

                    
                   document.getElementById('signInAsStudent').addEventListener('click', function() {
                        
                        window.location.href = '/sigin/newsignin.html'; 
                    });
                }
            })
            .catch(function(error) {
                var errorMessage = error.message;
                // document.getElementById('error-message').textContent = errorMessage;
                alert(' you are not an admin ')
                
            });
    });

