
const categories = ['Animals', 'Products', 'Technologies'];
const Animals = ['Cat', 'Hamster', 'Horse', 'Parrot'];
const Products = ['Bread', 'Prasley', 'Cheese'];
const Technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];
Animals.forEach(function() {
  console.log(`Number of categories: ${categories.length}
Category: Animals
Elements: ${Animals.length}
Category: Products
Elements: ${Products.length}
Category: Technologies
Elements: ${Technologies.length}`);
});