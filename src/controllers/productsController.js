const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '/../data/products.json');

const productsController = {
    getProducts: ()=>{
        return JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
    },

    
    allProduct: function (req, res) {
        res.render('./products/allProduct')
    },

    // show: (req, res) => {
    //     let productoId = req.params.id;
    //     let producto = adminController.getProducts().find(producto => producto.id == productoId);
    
    //     res.render('./products/productCreateForm', {
    //         title: 'Mi producto',
    //         producto: producto
    //     })
    // },

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
                "id":req.body.id,
                "name": req.body.name,
                "description":req.body.description,
                "price":req.body.price,
                "varietal":req.body.price,
                "year":req.body.year,
                "origen":req.body.origen,
                "region":req.body.region,
                "category":req.body.category,
                "available": true,
                "image": req.body.image
                
        }

        console.log("nuevo producto", newProducts);
    
        product.push(newProducts);
    
        fs.writeFileSync(productsPath, JSON.stringify(product, null, ' '));
    
        res.redirect('/allProduct');
    },

    productEdit: function (req, res) {
        res.render('./products/productEditForm')
    }, 

    // edit: (req,res) =>{
    //     let productoId = req.params.id;
    //     let producto = adminController.getProducts().find(producto => producto.id == productoId);
    
    //     res.render('/products/edit', {
    //         title: 'Mi producto',
    //         product: producto
    //     });
    // },
    
    update: (req,res) =>{
        let productoId = req.params.id;
        let productos = adminController.getProducts();
    
        productos.forEach((producto, index) =>{
            if(producto.id == productoId){
            producto.name = req.params.name;
            descripcion.description = req.params.description;
    
            productos[index] = producto;
        }
    });
    
        fs.writeFileSync(productsPath, JSON.stringify(productos, null, ' '));
    
        res.redirect('/products');
    
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
        let productoId = req.params.id
        let productos = productsControllerr.getProducts();
        let producto = productsController.getProducts().find(producto => productoid == productoId);
    
        productos.splice (productos.indexOf (producto), 1 );
        let newProducts = productos.filter(producto => producto.id == productoId);
        fs.writeFileSync (productsPath, JSON.stringify(newProducts, null, ' '));
    
        res.redirect('./products')
    },

    productDetail: function (req, res) {
        res.render('./products/productDetail')
    }
    
}

module.exports = productsController;