
const categories = ['Animals', 'Products', 'Technologies'];
const Animals = ['Cat', 'Hamster', 'Horse', 'Parrot'];
const Products = ['Bread', 'Prasley', 'Cheese'];
const Technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];
Animals.forEach(function() {
  console.log(`Number of categories: ${categories.length}
Category: ${categories[0]}
Elements: ${Animals.length}
Category: ${categories[1]}
Elements: ${Products.length}
Category: ${categories[2]}
Elements: ${Technologies.length}`);
});