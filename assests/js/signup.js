let generatedOTP = "";
let timerInterval;

/* =================================
           PASSWORD SHOW / HIDE
        ================================= */

function togglePassword() {
  const password = document.getElementById("password");
  const icon = document.getElementById("passwordIcon");

  if (password.type === "password") {
    password.type = "text";

    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    password.type = "password";

    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}

/* =================================
           REGISTER FORM
        ================================= */

document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("fullName").value.trim();

    const mobile = document.getElementById("mobile").value.trim();

    const password = document.getElementById("password").value;

    const confirmPassword = document.getElementById("confirmPassword").value;

    /* Password validation */

    if (password !== confirmPassword) {
      alert("Password and Confirm Password do not match.");

      return;
    }

    /* Mobile validation */

    if (!/^[0-9]{10}$/.test(mobile)) {
      alert("Please enter a valid 10 digit mobile number.");

      return;
    }

    /*
                    DEMO OTP
        
                    Real project me OTP backend/API
                    se generate aur send hoga.
                */

    generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();

    console.log("Demo OTP:", generatedOTP);

    /* Mobile display */

    document.getElementById("mobileDisplay").textContent =
      "+91 " + mobile.substring(0, 2) + "XXXX " + mobile.substring(6);

    /* Clear OTP */

    document.querySelectorAll(".otp-input").forEach((input) => {
      input.value = "";
    });

    document.getElementById("otpError").textContent = "";

    /* Open OTP modal */

    const otpModal = new bootstrap.Modal(document.getElementById("otpModal"));

    otpModal.show();

    /* Focus first OTP */

    setTimeout(() => {
      document.querySelector(".otp-input").focus();
    }, 500);

    /* Start timer */

    startTimer();
  });

/* =================================
           OTP INPUT AUTO MOVE
        ================================= */

const otpInputs = document.querySelectorAll(".otp-input");

otpInputs.forEach((input, index) => {
  input.addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, "");

    if (this.value && index < otpInputs.length - 1) {
      otpInputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", function (event) {
    if (event.key === "Backspace" && !this.value && index > 0) {
      otpInputs[index - 1].focus();
    }
  });
});

/* =================================
           VERIFY OTP
        ================================= */

function verifyOTP() {
  let enteredOTP = "";

  otpInputs.forEach((input) => {
    enteredOTP += input.value;
  });

  const error = document.getElementById("otpError");

  if (enteredOTP.length !== 6) {
    error.textContent = "Please enter the complete 6-digit OTP.";

    return;
  }

  if (enteredOTP !== generatedOTP) {
    error.textContent = "Invalid OTP. Please try again.";

    return;
  }

  /* OTP correct */

  error.textContent = "";

  clearInterval(timerInterval);

  /* Close OTP */

  const otpModalElement = document.getElementById("otpModal");

  const otpModal = bootstrap.Modal.getInstance(otpModalElement);

  otpModal.hide();

  /* Show success */

  setTimeout(() => {
    const successModal = new bootstrap.Modal(
      document.getElementById("successModal"),
    );

    successModal.show();
  }, 400);
}

/* =================================
           RESEND OTP
        ================================= */

function resendOTP() {
  generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();

  console.log("New Demo OTP:", generatedOTP);

  document.getElementById("otpError").textContent = "A new OTP has been sent.";

  startTimer();
}

/* =================================
           TIMER
        ================================= */

function startTimer() {
  clearInterval(timerInterval);

  let seconds = 30;

  const resendBtn = document.getElementById("resendBtn");

  const timer = document.getElementById("timer");

  resendBtn.disabled = true;

  timer.textContent = `(${seconds}s)`;

  timerInterval = setInterval(() => {
    seconds--;

    timer.textContent = `(${seconds}s)`;

    if (seconds <= 0) {
      clearInterval(timerInterval);

      resendBtn.disabled = false;

      timer.textContent = "";
    }
  }, 1000);
}

//============================================

// Login Script Code

//============================================

function togglePassword() {
  const password = document.getElementById("password");

  const eyeIcon = document.getElementById("eyeIcon");

  if (password.type === "password") {
    password.type = "text";

    eyeIcon.classList.remove("fa-eye");

    eyeIcon.classList.add("fa-eye-slash");
  } else {
    password.type = "password";

    eyeIcon.classList.remove("fa-eye-slash");

    eyeIcon.classList.add("fa-eye");
  }
}

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  alert("Login submitted successfully!");
});
