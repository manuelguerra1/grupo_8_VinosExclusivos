const fs = require('fs');
const path = require ('path');

const productsPath = path.join(__dirname, '/../data/products.json');

const productsCreateFormController = {
    getProducts: ()=>{
        return JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
    },
index: (req, res)=>{
    res.render('/products/index', {
        title: 'Listado de Productos',
        productsList: productsCreateFormController.getProducts()
    });
},

show: (req, res) => {
    let productoId = req.params.id;
    let producto = productsCreateFormController.getProducts().find(producto => producto.id == productoId);

    res.render('/products/show', {
        title: 'Mi producto',
        producto: producto
    })
},
create: (req,res) =>{
    res.render('/products/create',  {
        title: 'Nuevo producto',
    });
},
store: (req,res)=>{
    let producto = productsCreateFormController.getProducts();
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

edit: (req,res) =>{
    let productoId = req.params.id;
    let producto = productsCreateFormController.getProducts().find(producto => producto.id == productoId);

    res.render('/products/edit', {
        title: 'Mi producto',
        product: producto
    });
},
update: (req,res) =>{
    let productoId = req.params.id;
    let productos = productsCreateFormController.getProducts();

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

}

module.exports = productsCreateFormController;