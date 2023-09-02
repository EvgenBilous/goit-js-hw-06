const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
//console.log(list);

function createItem(name) {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = name;
  return li;
}
const markup = ingredients.map(createItem);

//console.log(markup);
list.append(...markup);
