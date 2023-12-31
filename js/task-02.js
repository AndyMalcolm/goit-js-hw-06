const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


/*Напиши скрипт, який для кожного елемента масиву ingredients:

Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
Додасть назву інгредієнта як його текстовий вміст.
Додасть елементу клас item.
Після чого, вставить усі <li> за одну операцію у список ul#ingredients. */
function render(arr) {
  const ulElement = document.getElementById("ingredients");
  const liElements = arr.map(ingredient => {
    const liElement = document.createElement("li");
    liElement.className = "item";
    liElement.textContent = ingredient;
    return liElement;
  });
  ulElement.append(...liElements);
}
render(ingredients);