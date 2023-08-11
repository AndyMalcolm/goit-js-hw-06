const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const newListItem = document.createElement("li");
function render(arr) {
  const ul = document.querySelector("list");
  const ingredientss = ul.map(item => {
    const liEl = document.createElement("li");
    const typeEl = document.createElement("h2");
    
    liEl.append(typeEl)
    return;
  })
  ul 
}