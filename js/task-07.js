const inputEl = document.querySelector("#font-size-control");
const spanEle = document.querySelector("#text");
spanEle.style.fontSize = "16px";
inputEl.addEventListener("input", () => {
  spanEle.style.fontSize = `${inputEl.value}px`;
});
