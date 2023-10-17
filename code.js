function validateForm() {
    var fullName = document.getElementById("fullName").value;
    var dob = document.getElementById("dob").value;
    var email = document.getElementById("email").value;
    var occupation = document.getElementById("occupation").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var gender = document.getElementById("gender").value;

    if (fullName === "") {
        alert("Please enter your full name.");
        return false;
    }

    var dobDate = new Date(dob);
    var currentDate = new Date();
    var age = currentDate.getFullYear() - dobDate.getFullYear();
    if (age < 18) {
        alert("You must be at least 18 years old to register.");
        return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (occupation === "") {
        alert("Please enter your occupation.");
        return false;
    }

    var phoneNumberRegex = /^\d{11}$/;
    if (!phoneNumberRegex.test(phoneNumber)) {
        alert("Please enter a valid 11-digit phone number.");
        return false;
    }

    if (gender === "") {
        alert("Please select your gender.");
        return false;
    }

    alert("Registration successful!");
    return true;
}
