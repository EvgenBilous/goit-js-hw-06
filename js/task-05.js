const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

const onInputChange = (event) => {
  // console.log(event.target.value);
  spanEl.textContent = event.target.value || "Anonymous";
};
inputEl.addEventListener("input", onInputChange);
