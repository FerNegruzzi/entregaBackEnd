const ProductManager = require("./productManagerPromises");

const productManager = new ProductManager('./Products.json');


const products = async () => {
    const product1 = {
        title: 'tabla',
        description: 'una tabla de skate profecional',
        price: 35,
        thumbnail: 'table/img.jpg',
        code: 1234,
        stock: 15
    }
    const product2 = {
        title:'truck',
        description: 'unos trucks de skate profecionales',
        price: 65,
        thumbnail: 'truck/img.jpg',
        code: 1235,
        stock: 20
    }
    const product3 = {
        title:'ruedas',
        description: 'unas ruedas de skate profecional',
        price: 25,
        thumbnail: 'rueda/img.jpg',
        code: 1236 ,
        stock: 10
    }
    const product4 = {
        title:'lija',
        description: 'una lija de skate profecional',
        price: 12,
        thumbnail: 'lija/img.jpg',
        code: 1237 ,
        stock: 22
    }
    
// ADD PRODUCTS

await productManager.addProduct(product1)
await productManager.addProduct(product2)
await productManager.addProduct(product3)
await productManager.addProduct(product4)


// GET PRODUCTS
const data = await productManager.getProducts()
console.log(data)



// GET PRODUCT BY ID

// const IdProduct = productManager.getProductById(2)
// return IdProduct


// UPDATE PRODUCT

// productManager.updateProduct(1, 'title', 'tabla de skate pro')


// DELETE PRODUCT 

// await productManager.deleteProduct(3)
// await productManager.deleteProduct(4)


}

products()