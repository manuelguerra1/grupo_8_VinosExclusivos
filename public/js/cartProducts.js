const API = 'http://localhost:3008/api/products'

const getProducts = async(api) => { // el parametro api representa la url de la api donde se obtendran los datos de los productos.
    try {

        const response = await fetch(api) // se hace una solicitud a la api, y el fetch devuelve una promesa que resuelve en la respuesta de la solicitud.

        const data = await response.json() // el metodo json analiza el cuerpo de la respuesta como JSON y devuelve una promesa que resuelve como objeto.js.

        return data // devuelve los datos obtenidos desde la api como resultado.

    } catch (error) {
        console.log('error', error); // agarra el error y lo muestra en consola.
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // inicia la solicitud de los datos de los productos desde la api.
    getProducts(API).then(data => renderProducts(data)) // cuando los datos estan disponibles desde la api, esta funcion muestra los productos en la pagina.
})

const renderProducts = (products) => {
    // console.log('renderProdsucts', products, products.products, Array.isArray(products.products));
    products.products.forEach(product => {
        renderProduct(product);
        
        // contentProducts.innerHTML +=
        // `<button onclick='addtoCart(this)' 
        // data-id='${product.id}'
        // data-image='${product.image}'
        // data-name='${product.name}'
        // data-description='${product.description}
        // data-price='${product.price}'
        // >Añadir al carrito</button>` // el (this) le dice 'te paso como parametro a vos mismo
        // let productsImg = document.querySelector('.card-img-top')
        // let prodName = document.querySelector('#products h3')
        // let prodPrice = document.querySelector('#products small')
        // let prodBtn = document.querySelector('#products button')
        // let prodDesc = document.querySelector('#product h4')
        // // contentProducts.classList.add = 'allProd-updated'
        // // prodName.style.color = '#ffd9e2'
        // // prodDesc.style.color = '#ffd9e2'
        // console.log(prodDesc);
        // prodBtn.style.backgroundColor = 'RGBA(123, 41, 73, var(--bs-bg-opacity, 1))'
        // prodBtn.style.border = '1px solid #ffd9e2'
        // prodBtn.style.color = '#ffd9e2'
        // prodBtn.style.borderRadius = '7px'
        // prodBtn.style.padding = '6px 12px'
        // productsImg.style.margin = '20px'
        // productsImg.style.height = '300px'
        // prodPrice.style.color = '#ffd9e2'
        // prodPrice.style.fontWeight = 'bold'
        // prodPrice.style.fontSize = '22px'
        // prodPrice.style.height = '23px'
        // contentProducts.style.backgroundColor = 'RGBA(123, 41, 73, var(--bs-bg-opacity, 1))'
        // contentProducts.style.width = '100%'

        
    }
);
        // showProduct(product); // itera sobre cada producto.
        // contentProducts.innerHTML += `` // se agrega contenido html con los atributos data-.
}

// const renderProduct = (product)  => {
//     contentProducts.innerHTML += `
//         <h3>${product.name}</h3>
//         <small>${product.price}</small>
//         <br>
//         <img src=${product.image}>
//         <button onclick='addtoCart(this)'
//         data-id='${product.id}'
//         data-name='${product.name}'
//         data-image='${product.image}'
//         data-price='${product.price}'
//         >Añadir al carrito</button>
//         ` 
// }
    
const addtoCart = (button) => { // busca si un producto ya existe en el carrito. si existe, se incrementa la cantidad, sino, lo agrega al carrito, y luego, se guarda el carrito actualizado en el localStorage.
    console.log('addToCart', button.dataset, 'askjdghakfj');
    let producto = {
        id: button.dataset.id,
        image: button.dataset.image,
        name: button.dataset.name,
        description: button.dataset.description,
        price: button.dataset.price,
        quantity: 1
    } // esta variable crea propiedades cuyos valores los obtienen de los atributos data-, a los cuales se accede mediante el dataset.
    // console.log('addtoCart', producto);
    
        // traigo el carrito der localStorage
        let cart = getCart()

        if (cart.length) { // verifica si el carrito tiene productos.
    
            let product_exists = productExists(producto, cart) // se le pasa el resultado de llamar a la funcion productExists, con producto(el producto a agregar), y el cart(el carrito actualizado con su arreglo).
            console.log('existe', product_exists);

            if (product_exists) {
                
                cart.forEach(item => { // itera sobre cada elemento del carrito.
                    
                    if (item.id == product_exists.id) item.quantity++ // verifica si el id del elemento coinicide con el id del producto existente. si es asi, se incrementa la cantidad del elemento en el carrito 1.
                    
                })
                    
            } else {
                    
                cart.push(producto) // se agrega el producto al cart, osea, se agrega un nuevo producto al carrito.
                    
            };
                
        } else {
                
            cart.push(producto) // se agrega el producto al cart, osea, se agrega un nuevo producto al carrito.
                
                
                
                // saveCart(cart) // se llama a la funcion para que guarde el contenido del carrito en el localStorage.
                
            }
    
            // actualizo el localStorage
            saveCart(cart)
        }

        
        
        
        function saveCart(cart) {
            
    localStorage.setItem('cart', JSON.stringify(cart))

}


 