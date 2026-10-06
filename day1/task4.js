const products = [
  { name: "Laptop", price: 55000, category: "Electronics" },
  { name: "Mouse", price: 800, category: "Electronics" },
  { name: "Chair", price: 4500, category: "Furniture" },
  { name: "Notebook", price: 120, category: "Stationery" } ];

products.forEach(name => {console.log(name.name);});

const productNames = products.map(item => item.name);
const productfilter = products.filter(item => item.price >= 1000);
const productFind = products.find(item => item.name = "Mouse");

console.log(productNames);
console.log(productfilter);
console.log(productFind);

