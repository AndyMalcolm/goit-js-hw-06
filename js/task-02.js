const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


/* const newListItem = document.createElement("li");
function render(arr) {
  const ul = document.querySelector("list");
  const ingredientss = ul.map(item => {
    const liEl = document.createElement("li");
    const typeEl = document.createElement("h2");
    
    liEl.append(typeEl)
    return;
  })
  ul 
}*/

/*Напиши скрипт, який для кожного елемента масиву ingredients:

Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
Додасть назву інгредієнта як його текстовий вміст.
Додасть елементу клас item.
Після чого, вставить усі <li> за одну операцію у список ul#ingredients. */
const ulElement = document.getElementById("ingredients");
const liElements = ingredients.map(ingredient => `<li class="item">${ingredient}</li>`);
ulElement.innerHTML = liElements.join("");