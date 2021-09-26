let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  email = id("email"),
  password = id("password"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

// console.log("errorMsg", errorMsg, successIcon, failureIcon);

let validationCheck = (id, serial, message) => {
  if (!id.value && id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";
    successIcon[serial].style.opacity = 0;
    failureIcon[serial].style.opacity = 1;
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";
    successIcon[serial].style.opacity = 1;
    failureIcon[serial].style.opacity = 0;
  }
};
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validationCheck(username, 0, "Username cannot be blank");
  validationCheck(email, 1, "Email cannot be blank");
  validationCheck(password, 2, "Password cannot be blank");
});
