
const categories = ['Animals', 'Products', 'Technologies'];
const Animals = ['Cat', 'Hamster', 'Horse', 'Parrot'];
const Products = ['Bread', 'Prasley', 'Cheese'];
const Technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];
Animals.forEach(function() {
  console.log(`Number of categories: ${categories.length}
  \nCategory: Animals\nElements: ${Animals.length}
  \nCategory: Products\nElements: ${Products.length}
  \nCategory: Technologies\nElements: ${Technologies.length}`);
});