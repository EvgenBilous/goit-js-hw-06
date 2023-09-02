const inputEl = document.querySelector("#font-size-control");
const spanEle = document.querySelector("#text");

inputEl.addEventListener("input", () => {
  spanEle.style.fontSize = `${inputEl.value}px`;
});
