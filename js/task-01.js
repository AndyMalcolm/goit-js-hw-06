// const categoriesList = document.querySelectorAll('.item');
// console.log(`Number of categories: ${categoriesList.length}`);
// categoriesList.forEach(category => {
//   const categoryName = category.querySelector('h2').textContent;
//   const categoryItems = category.querySelectorAll('li').length;
//   console.log(`Category: ${categoryName}`);
//   console.log(`Elements: ${categoryItems}`);
// });
const categoriesContainer = document.querySelector('.categories-container');
const categoriesList = categoriesContainer.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesList.length}`);
categoriesList.forEach(category => {
  const categoryName = category.firstElementChild.textContent;
  const categoryItems = category.lastElementChild.length;//вместо querySelectorAll('li')
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryItems}`);
});
