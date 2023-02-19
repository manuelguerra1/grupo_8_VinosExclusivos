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

    productDetail: function (req, res) {
        res.render('./products/productDetail')
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
        let producto = adminController.getProducts();
        let images = [];
        
        if (req.files) {
            req.files.forEach(file =>{
                images.push({
                    "id": Date.now(),
                    "name": file.filename,
                });
            });
    
        } else{
            images.push("default.jpg");
        }
    
        let newProducts = {
                "id":Date.now,
                "name": req.params.name,
                "price":req.params.price,
                "description":req.params.description,
                "category":req.params.category,
                "image": images,
                "available": true
                
        }
    
        products.push(newProducts);
    
        fs.writeFileSync(productsPath, JSON.stringify(producto, null, ' '));
    
        res.redirect('/products');
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
        let productoId = req.params.id;
        let producto = adminCotroller.getProducts().find(producto => productoid == productoId);
    
        res.render ('/products/delete', {
            title: 'Eliminar producto',
            product: producto
        });
    
    },
    
    destroy: (req, res) => {
        let productoId = req.params.id
        let productos = adminController.getProducts();
        let producto = adminCotroller.getProducts().find(producto => productoid == productoId);
    
        productos.splice (productos.indexOf (producto), 1 );
        let newProducts = productos.filter(producto => producto.id == productoId);
        fs.writeFileSync (productsPath, JSON.stringify(newProducts, null, ' '));
    
        res.redirect('./products')
    }
    
}

module.exports = productsController;