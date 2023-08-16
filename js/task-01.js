
// const categories = ['Animals', 'Products', 'Technologies'];
// const Animals = ['Cat', 'Hamster', 'Horse', 'Parrot'];
// const Products = ['Bread', 'Prasley', 'Cheese'];
// const Technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];
// const category = document.querySelector("#categories");
// Animals.forEach(function() {
//   console.log(`Number of categories: ${categories.length}
// Category: ${categories[0]}
// Elements: ${Animals.length}
// Category: ${categories[1]}
// Elements: ${Products.length}
// Category: ${categories[2]}
// Elements: ${Technologies.length}`);
// });
//переделать
const categoriesList = document.querySelectorAll('.item'); // Отримуємо всі елементи li.item
console.log(`Number of categories: ${categoriesList.length}`);
categoriesList.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryItems = category.querySelectorAll('li').length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryItems}`);
});
