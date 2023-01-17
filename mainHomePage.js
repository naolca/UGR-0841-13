const hamburger = document.querySelector(".hamburger");
const $form = document.querySelector(".js-form");
const $searchInput = document.querySelector(".js-search-input");
hamburger.addEventListener("click", function () {
  navBar = document.querySelector(".top__navbar");
  navBar.classList.toggle("active");
});

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
  searchInputValue = $searchInput.value.trim();

  clearError($searchInput);

  if (!searchInputValue) {
    highlightError($searchInput, "seach field cannot be empty");
  }

  if (searchInputValue) {
    window.location.href = "searchResults.html";
  }
};

$form.addEventListener("submit", (event) => {
  event.preventDefault();

  validate();
});
