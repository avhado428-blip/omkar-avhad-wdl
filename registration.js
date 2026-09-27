// ---------- Helper functions ----------

function showError(inputId, errorId, message) {
    document.getElementById(errorId).textContent = message;
    document.getElementById(inputId).classList.add("invalid");
}

function clearError(inputId, errorId) {
    document.getElementById(errorId).textContent = "";
    document.getElementById(inputId).classList.remove("invalid");
}

function clearAllErrors() {
    const errorSpans = document.querySelectorAll(".error");
    errorSpans.forEach(span => span.textContent = "");

    const invalidFields = document.querySelectorAll(".invalid");
    invalidFields.forEach(field => field.classList.remove("invalid"));

    document.getElementById("successMessage").style.display = "none";
}

// ---------- Individual field validators ----------

function validateName() {
    const nameValue = document.getElementById("name").value.trim();
    const nameRegex = /^[A-Za-z ]+$/;

    if (nameValue === "") {
        showError("name", "nameError", "Patient name is required.");
        return false;
    }
    if (!nameRegex.test(nameValue)) {
        showError("name", "nameError", "Name should contain only letters and spaces.");
        return false;
    }
    clearError("name", "nameError");
    return true;
}

function validateAge() {
    const ageValue = document.getElementById("age").value.trim();

    if (ageValue === "") {
        showError("age", "ageError", "Age is required.");
        return false;
    }
    if (ageValue < 1 || ageValue > 120) {
        showError("age", "ageError", "Enter a valid age between 1 and 120.");
        return false;
    }
    clearError("age", "ageError");
    return true;
}

function validateGender() {
    const genderSelected = document.querySelector('input[name="gender"]:checked');

    if (!genderSelected) {
        showError("male", "genderError", "Please select a gender.");
        return false;
    }
    clearError("male", "genderError");
    return true;
}

function validateMobile() {
    const mobileValue = document.getElementById("mobile").value.trim();
    const mobileRegex = /^[6-9]\d{9}$/;

    if (mobileValue === "") {
        showError("mobile", "mobileError", "Mobile number is required.");
        return false;
    }
    if (!mobileRegex.test(mobileValue)) {
        showError("mobile", "mobileError", "Enter a valid 10-digit Indian mobile number.");
        return false;
    }
    clearError("mobile", "mobileError");
    return true;
}

function validateEmail() {
    const emailValue = document.getElementById("email").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === "") {
        showError("email", "emailError", "Email address is required.");
        return false;
    }
    if (!emailRegex.test(emailValue)) {
        showError("email", "emailError", "Enter a valid email address.");
        return false;
    }
    clearError("email", "emailError");
    return true;
}

function validateDob() {
    const dobValue = document.getElementById("dob").value;
    const today = new Date().toISOString().split("T")[0];

    if (dobValue === "") {
        showError("dob", "dobError", "Date of birth is required.");
        return false;
    }
    if (dobValue > today) {
        showError("dob", "dobError", "Date of birth cannot be in the future.");
        return false;
    }
    clearError("dob", "dobError");
    return true;
}

function validateAddress() {
    const addressValue = document.getElementById("address").value.trim();

    if (addressValue === "") {
        showError("address", "addressError", "Address is required.");
        return false;
    }
    clearError("address", "addressError");
    return true;
}

function validateBloodGroup() {
    const bloodGroupValue = document.getElementById("bloodGroup").value;

    if (bloodGroupValue === "") {
        showError("bloodGroup", "bloodGroupError", "Please select a blood group.");
        return false;
    }
    clearError("bloodGroup", "bloodGroupError");
    return true;
}

function validateTest() {
    const testValue = document.getElementById("test").value;

    if (testValue === "") {
        showError("test", "testError", "Please select a department/test.");
        return false;
    }
    clearError("test", "testError");
    return true;
}

function validateAppointment() {
    const appointmentValue = document.getElementById("appointment").value;
    const today = new Date().toISOString().split("T")[0];

    if (appointmentValue === "") {
        showError("appointment", "appointmentError", "Preferred appointment date is required.");
        return false;
    }
    if (appointmentValue < today) {
        showError("appointment", "appointmentError", "Appointment date cannot be in the past.");
        return false;
    }
    clearError("appointment", "appointmentError");
    return true;
}

function validateRegistrationDate() {
    const registrationDateValue = document.getElementById("registrationDate").value;
    const today = new Date().toISOString().split("T")[0];

    if (registrationDateValue === "") {
        showError("registrationDate", "registrationDateError", "Registration date is required.");
        return false;
    }
    if (registrationDateValue > today) {
        showError("registrationDate", "registrationDateError", "Registration date cannot be in the future.");
        return false;
    }
    clearError("registrationDate", "registrationDateError");
    return true;
}

function validateCollection() {
    const collectionValue = document.getElementById("collection").value;

    if (collectionValue === "") {
        showError("collection", "collectionError", "Please select a sample collection preference.");
        return false;
    }
    clearError("collection", "collectionError");
    return true;
}

// ---------- Form submit handler ----------

document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const isNameValid = validateName();
    const isAgeValid = validateAge();
    const isGenderValid = validateGender();
    const isMobileValid = validateMobile();
    const isEmailValid = validateEmail();
    const isDobValid = validateDob();
    const isAddressValid = validateAddress();
    const isBloodGroupValid = validateBloodGroup();
    const isTestValid = validateTest();
    const isAppointmentValid = validateAppointment();
    const isRegistrationDateValid = validateRegistrationDate();
    const isCollectionValid = validateCollection();

    const isFormValid = isNameValid && isAgeValid && isGenderValid &&
        isMobileValid && isEmailValid && isDobValid && isAddressValid &&
        isBloodGroupValid && isTestValid && isAppointmentValid &&
        isRegistrationDateValid && isCollectionValid;

    if (isFormValid) {
        document.getElementById("successMessage").style.display = "block";
        window.scrollTo(0, 0);
    } else {
        document.getElementById("successMessage").style.display = "none";
    }
});

// ---------- Live validation on input/change ----------

document.getElementById("name").addEventListener("input", validateName);
document.getElementById("age").addEventListener("input", validateAge);
document.getElementById("mobile").addEventListener("input", validateMobile);
document.getElementById("email").addEventListener("input", validateEmail);
document.getElementById("dob").addEventListener("change", validateDob);
document.getElementById("address").addEventListener("input", validateAddress);
document.getElementById("bloodGroup").addEventListener("change", validateBloodGroup);
document.getElementById("test").addEventListener("change", validateTest);
document.getElementById("appointment").addEventListener("change", validateAppointment);
document.getElementById("registrationDate").addEventListener("change", validateRegistrationDate);
document.getElementById("collection").addEventListener("change", validateCollection);