const $form = document.querySelector(".js-form");
const $nameInput = document.querySelector(".js-name-input");
const $genreInput = document.querySelector(".js-genre-input");
const $viewDayInput = document.querySelector(".js-viewDay-input");
const $paymentInput = document.querySelector(".js-payment-input");
const $timeInput = document.querySelector(".js-time-input");
const $frequencyInput = document.querySelector(".js-frequency-input");
const $additionalInfoInput = document.querySelector(".js-additionalInfo-input");

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
  const genreInputValue = $genreInput.value.trim();
  const viewDayInputValue = $viewDayInput.value.trim();
  const paymentInputValue = $paymentInput.value.trim();
  const timeInputValue = $timeInput.value.trim();
  const frequencyInputValue = $frequencyInput.value.trim();
  const additionalInfoInputValue = $additionalInfoInput.value.trim();

  clearError($nameInput);
  clearError($genreInput);
  clearError($viewDayInput);
  clearError($paymentInput);
  clearError($timeInput);
  clearError($frequencyInput);
  clearError($additionalInfoInput);

  if (!nameInputValue) {
    highlightError($nameInput, "username cannot be empty");
  }

  if (!genreInputValue) {
    highlightError($genreInput, "username cannot be empty");
  }

  if (!viewDayInputValue) {
    highlightError($viewDayInput, "username cannot be empty");
  }

  if (!paymentInputValue) {
    highlightError($paymentInput, "username cannot be empty");
  }

  if (!timeInputValue) {
    highlightError($timeInput, "username cannot be empty");
  }

  if (!frequencyInputValue) {
    highlightError($frequencyInput, "username cannot be empty");
  }

  if (!additionalInfoInputValue) {
    highlightError($additionalInfoInput, "username cannot be empty");
  }
};

$form.addEventListener("submit", (event) => {
  event.preventDefault();

  validate();
});
