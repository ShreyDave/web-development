// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}


// Defining a function to validate form
function validateForm() {
    // Retrieving the values of form elements
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var password = document.contactForm.password.value;
    var confirmpassword = document.contactForm.confirmpassword.value;
    var country = document.contactForm.country.value;
    var gender = document.contactForm.gender.value;
    var file = document.contactForm.file.value;

    // Defining error variables with a default value
    var nameErr = emailErr = mobileErr = passwordErr = confirmpasswordErr = countryErr = genderErr = fileErr =
        true;

    // Validate name
    if (name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    // Validate email address
    if (email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    // Validate mobile number
    if (mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if (regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else {
            printError("mobileErr", "");
            mobileErr = false;
        }
    }




    // Validate password
    if (password == "") {
        printError("passwordErr", "Please enter your password");
    } else {
        var regex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        if (regex.test(password) === false) {
            printError("passwordErr", "Your password must be at least 8 characters long");
        } else {
            printError("passwordErr", "");
            passwordErr = false;
        }
    }

    // Validate confirmpassword
    if (confirmpassword == "") {
        printError("confirmpasswordErr", "Please enter your confirm password");
    } else {
        var regex;
        if (password != confirmpassword) {
            printError("confirmpasswordErr", "Password & confirm password doesn't match.");
        } else {
            printError("confirmpasswordErr", "");
            confirmpassword = false;
        }
    }


    // Validate country
    if (country == "Select") {
        printError("countryErr", "Please select your country");
    } else {
        printError("countryErr", "");
        countryErr = false;
    }

    // Validate gender
    if (gender == "") {
        printError("genderErr", "Please select your gender");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }

    // Validate upload file
    if (file == "") {
        printError("fileErr", "please upload your image");
    } else {
        var regex = /(\.jpg|\.jpeg|\.png||\.svg|\.gif)$/i;
        if (regex.test(file) === false) {
            printError("fileErr", "please upload your valid image");
        } else {
            printError("fileErr", "");
            fileErr = false;
        }
    }

    // Prevent the form from being submitted if there are any errors
    if ((nameErr || emailErr || mobileErr || passwordErr || countryErr || genderErr || fileErr) == true) {
        return false;
    } else {
        document.getElementById("outputname").innerText = name;
        console.log(outputname);
        document.getElementById("outputemail").innerText = email;
        console.log(outputemail);
        document.getElementById("outputmnumber").innerText = mobile;
        console.log(outputmnumber);
        document.getElementById("outputcountry").innerText = country;
        console.log(outputcountry);
        document.getElementById("output1").innerText = gender;
        console.log(output1);
        document.getElementById("outputfile").innerText = file;
        console.log(outputfile);
        event.preventDefault();
    }
};
document.querySelector(".xyx").addEventListener("keypress", function (evt) {
    if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57) {
        evt.preventDefault();
    }
});
var loadFile = function (event) {
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
        URL.revokeObjectURL(output.src) // free memory
    }
};