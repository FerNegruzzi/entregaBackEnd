class ProductManager {
    constructor(){
        this.products = [];
        this.idCount = 0
    }

    addProduct(product) {
        if(!product.title || !product.description || !product.price || !product. thumbnail || !product.code || !product.stock){
            console.log("Un producto no se agrego correctamente. Todos los campos son obligatorios");
            return
        }
        if(this.products.some(productCode => productCode.code === product.code)){
            console.log("No se pudo agregar un objeto. Ese code ya esta registrado")
        }else{
            this.idCount++;
            const newProduct = {
                id: this.idCount,
                title: product.title,
                description: product.description,
                price: product.price,
                thumbnail: product.thumbnail,
                code: product.code,
                stock: product.stock
            }
            this.products.push(newProduct)
        }


        
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const idFilter = this.products.find(productId => productId.id === id);
            if(idFilter){
                return idFilter
            }else{
                return 'Id not found'
            } 
    }
    
    
}

module.exports = ProductManager