const inputEl = document.querySelector("#validation-input");
const inputElDataset = Number(inputEl.dataset.length);

const onInputChange = () => {
  if (inputEl.value.length === inputElDataset) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
};

inputEl.addEventListener("blur", onInputChange);

console.log(inputElDataset);
