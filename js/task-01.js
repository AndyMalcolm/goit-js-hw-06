const categoriesContainer = document.querySelector('.categories-container');
const categoriesList = categoriesContainer.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesList.length}`);
categoriesList.forEach(category => {
  const categoryName = category.firstElementChild.textContent;
  const categoryItems = category.lastElementChild.length;//или без querySelectorAll('li')
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryItems}`);
});
