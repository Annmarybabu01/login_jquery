
$(document).ready(function() {
    // Email validation
    $('#email').on('focusout', function() {
        var email = $(this).val();
        var emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail.com|yahoo.com|outlook.com)$/;
        
        if (!emailPattern.test(email) || email === "") {
            $('#emailErrorMessage').show();
            $("#email").css("border-color", "red");
        } else {
            $('#emailErrorMessage').hide();
            $("#email").css("border-color", "green");
        }
        toggleSubmitButton();
    });

    // Password validation
    $('#password').on('focusout', function() {
        var password = $(this).val();
        var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!passwordPattern.test(password) || password === "") {
            $('#passwordErrorMessage').show();
            $("#password").css("border-color", "red");

        } else {
            $('#passwordErrorMessage').hide();
            $("#password").css("border-color", "green");
        }
        toggleSubmitButton();
    });

    // Enable/disable submit button based on form validity
    function toggleSubmitButton() { 
        if (emailValid && passwordValid) {
            $('#loginButton').prop('disabled', false);
        } else {
            $('#loginButton').prop('disabled', true);
        }
    }
});