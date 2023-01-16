const $form = document.querySelector(".js-form");
const $nameInput = document.querySelector(".js-name-input");
const $viewDayInput = document.querySelector(".js-viewDay-input");

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
  const nameInputValue = $nameInput.value.trim();
  const viewDayInput = $viewDayInput.value.trim();

  clearError($nameInput);
  clearError($viewDayInput);

  if (!nameInputValue) {
    highlightError($nameInput, "username cannot be empty");
  }

  if (!viewDayInput) {
    highlightError($viewDayInput, "username cannot be empty");
  }
};

$form.addEventListener("submit", (event) => {
  event.preventDefault();

  validate();
});
