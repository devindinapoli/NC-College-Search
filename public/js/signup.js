$(document).ready(function() {
    
    // Add sign-in event
    $('#btnSignUp').on('click', function(event) {
        event.preventDefault();
        // get user info
        var firstName = $('#first_name').val().trim();
        var lastName = $('#last_name').val().trim();
        var email = $('#email').val().trim();
        var pass = $('#password').val().trim();
        var state = document.querySelector('option:checked').value;

        function validateForm() {
            var isValid = true;
            if (firstName === '' || lastName === '' || email === '' || pass === '' || state === '') {
                // alert user to fill out txt inputs with alert div
                alert('Please complete entire form!');
                isValid = false;
            }
            return isValid;
        }
        if(!validateForm()) {
            return;
        };

        var auth = firebase.auth();
    
        // sign-up
        var promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.then(function (event) {
            console.log('new uid: ' + firebase.auth().currentUser.uid);
            writeUserData(firebase.auth().currentUser.uid, firstName, lastName, email, state);
            // user data is not being sent to firebase when 
            
        }).catch(function (event) {            
            console.log(event.message)
        });      

        // clear form inputs
        clrTxt();
    });

    // log-out button
    $('#btnLogout').on('click', function(event) {
        event.preventDefault();
        firebase.auth().signOut();
        console.log('logout');
    });

    // save the user's profile into Firebase so we can list users,
    // use them in Security and Firebase Rules, and show profiles
    function writeUserData(userId, firstName, lastName, email, state) {
        firebase.database().ref('users/' + userId).set({
            firstName: firstName,
            lastName: lastName,
            email: email,
            state: state
        }, function (err) {
            window.location.replace('/');
        });
    };

    // function to clear email and password inputs
    function clrTxt() {
        $('#first_name').val('');
        $('#last_name').val('');
        $('#email').val('');
        $('#password').val('');
        // find a way to reset the state option
    };
});
