const signInBtn = document.querySelector(".signin-btn");
const signUpBtn = document.querySelector(".signup-btn");
const formBox = document.querySelector(".form-box");
const body = document.body;
// const emailInput = document.querySelector(".form__input").value;
// const confirmPasswordInput = document.querySelector(".form__input").value;

signUpBtn.addEventListener("click", function () {
  formBox.classList.add("active");
  body.classList.add("active");
});

signInBtn.addEventListener("click", function () {
  formBox.classList.remove("active");
  body.classList.remove("active");
});

function validateLoginForm() {
  const loginInput = document.querySelector(".login_input").value;
  const passwordInput = document.querySelector(".password_input").value;
  if (
    loginInput.trim() === "" ||
    passwordInput.trim() === ""
    // emailInput.trim() === "" ||
    // confirmPasswordInput.trim() === ""
  ) {
    alert("Не все поля заполнены!");
    return false;
  }

  // if (passwordInput !== confirmPasswordInput) {
  //   alert("Пароли не совпадают!");
  //   return false;
  // }

  return true;
}

formBox.addEventListener("submit", function (event) {
  event.preventDefault();
  if (validateLoginForm(true)) {
    window.location.href = "page 2/index2.html";
  }
});
