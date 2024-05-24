const signInBtn = document.querySelector(".signin-btn");
const signUpBtn = document.querySelector(".signup-btn");
const formBox = document.querySelector(".form-box");
const signinForm = document.querySelector(".form__input");
const signupForm = document.querySelector(".form__input");
const logininInput = document.querySelector('.form__input[name="login"]');
const passwordinInput = document.querySelector('.form__input[name="password"]');
const loginupInput = document.querySelector('.form__input[name="login"]');
const emailInput = document.querySelector('.form__input[name="email"]');
const passwordupInput = document.querySelector('.form__input[name="password"]');
const confirmPasswordInput = document.querySelector(
  '.form__input[name="confirm_password"]'
);
const body = document.body;

signUpBtn.addEventListener("click", function () {
  formBox.classList.add("active");
  body.classList.add("active");
});
signInBtn.addEventListener("click", function () {
  formBox.classList.remove("active");
  body.classList.remove("active");
});

signInBtn.addEventListener("DOMContentLoaded", function () {
  signinForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (
      logininInput.value.trim() === "" ||
      passwordinInput.value.trim() === ""
    ) {
      alert("Не все поля заполнены");
      return;
    }
  });

  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (
      loginupInput.value.trim() === "" ||
      emailInput.value.trim() === "" ||
      passwordupInput.value.trim() === "" ||
      confirmPasswordInput.value.trim() === ""
    ) {
      alert("Пожалуйста, заполните все поля.");
      return;
    }

    if (passwordupInput.value !== confirmPasswordInput.value) {
      alert("Пароли не совпадают.");
      return;
    }
  });
});
