const ProductManager = require("./class/Index");

const productList = new ProductManager();   
const allProducts = productList.getProducts();
const productForId = productList.getProductById();

productList.addProduct({
    title:'tabla',
    description: 'una tabla de skate profecional',
    price: 35,
    thumbnail: 'table/img.jpg',
    code: 1234,
    stock: 15});
productList.addProduct({
    title:'truck',
    description: 'unos trucks de skate profecionales',
    price: 65,
    thumbnail: 'truck/img.jpg',
    code: 1235,
    stock: 20});
productList.addProduct(
    {title:'ruedas',
    description: 'unas ruedas de skate profecional',
    price: 25,
    thumbnail: 'rueda/img.jpg',
    code: 1236 ,
    stock: 10});
productList.addProduct(
    {title:'lija',
    description: 'una lija de skate profecional',
    price: 12,
    thumbnail: 'lija/img.jpg',
    code: 1237 ,
    stock: 22});




console.log(allProducts)     
console.log(productList.getProductById(1))