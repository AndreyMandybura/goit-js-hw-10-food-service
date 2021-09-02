const inputEl = document.querySelector('#validation-input');
console.log(inputEl);

const validation = inputEl.dataset.length;

inputEl.addEventListener("blur", (e) => {
  if (e.target.value.length === Number(validation)) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
});