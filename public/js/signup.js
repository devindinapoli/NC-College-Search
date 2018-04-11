$(document).ready(function() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAFA_1zt0lcNdNWK12Qc6elrZBP0GpGSUQ",
        authDomain: "college-finder-738c6.firebaseapp.com",
        databaseURL: "https://college-finder-738c6.firebaseio.com",
        projectId: "college-finder-738c6",
        storageBucket: "college-finder-738c6.appspot.com",
        messagingSenderId: "1076388845287"
    };

    firebase.initializeApp(config);    

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

    // add realtime listener
    // remove this listener from submit page when login is available on main page
    firebase.auth().onAuthStateChanged(function (firebaseUser) {
        if(firebaseUser) {
            console.log(firebase.auth().currentUser.email + ' is currently logged in.');
        } else {
            console.log('Not logged in.');
        };
    });

    // save the user's profile into Firebase so we can list users,
    // use them in Security and Firebase Rules, and show profiles
    function writeUserData(userId, firstName, lastName, email, state) {
        firebase.database().ref('users/' + userId).set({
        firstName: firstName,
        lastName: lastName,
        email: email,
        state: state
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
