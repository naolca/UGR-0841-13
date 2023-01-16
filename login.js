const $form = document.querySelector(".js-form");
const $usernameInput = document.querySelector(".js-username-input");
const $passwordInput = document.querySelector(".js-password-input");

const nameValid = ($input) => {
  return /\d/.test($input.value);
};

const highlightError = ($input, errorMessage) => {
  $input.parentNode.classList.add("form__field--error");
  //add the css for this class.
  $input.nextElementSibling.innerText = errorMessage;
};

const clearError = ($input) => {
  $input.parentNode.classList.remove("form__field--error");
  //add the css for this class.
  $input.nextElementSibling.innerText = "";
};

const validate = () => {
  const usernameValue = $usernameInput.value.trim();
  const passwordValue = $passwordInput.value.trim();

  clearError($usernameInput);
  clearError($passwordInput);

  if (!usernameValue) {
    highlightError($usernameInput, "username cannot be empty");
  }

  if (!passwordValue) {
    highlightError($passwordInput, "username cannot be empty");
  }

  if (usernameValue && nameValid($usernameInput)) {
    highlightError($usernameInput, "username cannot contain numbers");
  }
  if (usernameValue && !nameValid($usernameInput) && passwordValue) {
    window.location.href = "http://127.0.0.1:5500/homePage.html";
  }
};

$form.addEventListener("submit", (event) => {
  event.preventDefault();

  validate();
});
