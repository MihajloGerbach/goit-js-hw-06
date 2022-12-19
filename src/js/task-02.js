const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector("#ingredients");


function creatItem(elements) {
  return elements.map((element) => {
    const item = document.createElement("li");
    item.textContent = element;
    item.classList.add("item");
    return item;
  });
}
const itemsEl = creatItem(ingredients);
listEl.append(...itemsEl);
