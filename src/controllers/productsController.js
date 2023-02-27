const { Console } = require('console');
const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '/../data/products.json');

const productsController = {
    getProducts: ()=>{
        return JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
    },

    
    allProduct: function (req, res) {
        res.render('./products/allProduct', {
        productList: productsController.getProducts()
        });
    },

    productDetail: function (req, res) {
        let productId = req.params.id;
        let producto = productsController.getProducts().find(producto => producto.id == productId);

        res.render('./products/productDetail',{
            product: producto
        });
    },

    create: function (req, res) {
        res.render('./products/productCreateForm')
    },

    store: (req,res)=>{

        let product = productsController.getProducts();
        // let image = [];
        
        // if (req.files) {
        //     req.files.forEach(file =>{
        //         image.push({
        //             "id": Date.now(),
        //             "name": file.filename,
        //         });
        //     });
    
        // } else{
        //     image.push("default.jpg");
        // } 

        let newProducts = {
                "id":Date.now(),
                "name": req.body.name,
                "description":req.body.description,
                "price":req.body.price,
                "varietal":req.body.price,
                "year":req.body.year,
                "origen":req.body.origen,
                "region":req.body.region,
                "category":req.body.category,
                "available": true,
                "image": req.file.filename
                
        }

        // console.log("nuevo producto", newProducts);
    
        product.push(newProducts);
    
        fs.writeFileSync(productsPath, JSON.stringify(product, null, ' '));
    
        res.redirect('/');
    },

    productEdit: function (req, res) {
        let productId = req.params.id;
        let producto = productsController.getProducts().find(producto => producto.id == productId);
        console.log("hola estamos viendo",producto)
        
        return res.render('./products/productEditForm', {
            product: producto,
            id: req.params.id
        });
    }, 
    
    update: (req,res) =>{
        let productId = req.params.id;
        let productos = productsController.getProducts();
    
        productos.forEach((producto, index) =>{
            if(producto.id == productId){
            producto.name = req.body.name,
            producto.id= req.body.id,
            producto.description= req.body.description,
            producto.price= req.body.price,
            producto.varietal= req.body.varietal,
            producto.year= req.body.year,
            producto.origen= req.body.origen,
            producto.region= req.body.region,
            producto.category= req.body.category,
            //ponemos un ternario para que si me trae una imagen cambie el valor o foto y sino queda la misma imagen
            producto.image=  req.file ? req.file.filename : producto.image
            

            productos[index] = producto;
        }
    });
    
        fs.writeFileSync(productsPath, JSON.stringify(productos, null, ' '));
    
        res.redirect('/');
    
    },
    
    delete: (req,res) => {
        let productId = req.params.id;
        let product = productsController.getProducts().find(product => product.id == productId);
    
        res.render ('./products/productDeleteForm', {
            title: 'Eliminar producto',
            product: product
        });
    
    },
    
    destroy: (req, res) => {
        let productId = req.params.id;
        let products= productsController.getProducts();
       
        // NO FUNCIONA 
        // products = products.filter(product => product.id != productId);
        
        // ENCUENTRA EL PRODUCTO
        let product = products.find(product => product.id == productId)
        //ENCUENTRA EL INDICE DEL PRODUCTO
        let productIndex = products.indexOf(product)
        
        // ELIMINA EL PRODUCTO QUE COINCIDE CON EL INDICE DEL PRODUCTO
        products.splice(productIndex, 1)
        
        // PREGUNTA SI TIENE IMAGEN CUANDO ELIMINA UN PRODUCTO
        // SI TIENE UNA IMAGEN, LA BORRA DE LA CARPETA IMGS
        fs.unlinkSync(__dirname, `../../public/img/product/${product.image}`)
        
        
        fs.writeFileSync (productsPath, JSON.stringify(products, null, ' '));
    
        res.redirect('/');
    }
    
}

module.exports = productsController;