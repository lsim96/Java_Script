function formContainer(formType) {
  if (formType === "register") {
    document.getElementById("registerForm").style.display = "block";
    document.getElementById("logInForm").style.display = "none";
  } else {
    document.getElementById("logInForm").style.display = "block";
    document.getElementById("registerForm").style.display = "none";
  }
}

let addButton = document.getElementById("addBtn");

let logInBtn = document.getElementById("logInBtn");
let logInUsername = document.getElementById("username1");
let logInPassword = document.getElementById("pass1");

let testObject = [];

addButton.addEventListener("click", function () {
  let isValid = true;

  //username validation
  const username = document.getElementById("username").value;
  if (username.length > 25) {
    alert("Username is too long");
    isValid = false;
  } else {
    testObject.push({
      username: username,
    });
  }
  //email validation
  const email = document.getElementById("email").value;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    alert("Not an email");
    isValid = false;
  } else {
    testObject.push({
      email: email,
    });
  }
  //password validation
  const password = document.getElementById("pass").value;
  if (password.length < 8) {
    alert("Password is not long enough");
    isValid = false;
  } else {
    testObject.push({
      password: password,
    });
  }
  //age validation
  const age = document.getElementById("age1").value;
  if (age < 18) {
    alert("Not old enough!");
    isValid = false;
  } else {
    testObject.push({
      age: age,
    });
  }
  // testObject.push({
  //   username: username.value,
  //   email: email.value,
  //   password: password.value,
  //   age: age.value,
  // });
  isValid = true;
  formContainer("login");
  console.log(testObject);
});

function logIn(username, password) {
  for (let user of testObject) {
    if (user.username === username) {
      if (user.password === password) {
        alert("Succsessful login");
      } else {
        alert("Wrong password");
      }
    } else {
      alert("Wrong username");
    }
  }
}

logInBtn.addEventListener("click", function () {
  logIn(logInUsername.value, logInPassword.value);
});
