const buttonIncrement = document.querySelector('[data-action="increment"]');
const buttonDecrement = document.querySelector('[data-action="decrement"]');
const spanEl = document.querySelector("#value");

let counter = 0;
const increment = () => {
  counter += 1;
  spanEl.textContent = counter;
};
const decrement = () => {
  counter -= 1;
  spanEl.textContent = counter;
};

buttonIncrement.addEventListener("click", increment);
buttonDecrement.addEventListener("click", decrement);
