const categories = document.querySelectorAll("li.item");
//console.log(categories);

console.log(`Number of categories: ${categories.length}`);
//console.log(categories[1].lastElementChild);

categories.forEach((element) => {
  //console.log(element);
  console.log(`Category: ${element.firstElementChild.textContent}\n
Elements:${element.lastElementChild.children.length}`);
});
