const API = 'https://fakestoreapi.com/products'

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
    getProducts(API) // inicia la solicitud de los datos de los productos desde la api.
    .then(data => renderProducts(data)) // cuando los datos estan disponibles desde la api, esta funcion muestra los productos en la pagina.
})

const renderProducts = (products) => {
    products.forEach(product => {
        showProduct(product); // itera sobre cada producto.
        cartContent.innerHTML += ` 
        <button onclick = 'addToCart(this)'
        data-id = '${product.id}'
        data-title = '${product.title}'
        data-img = '${product.image}'
        data-price = '${product.price}'
        >Añadir al carrito</button>
    ` // se agrega contenido html con los atributos data-.
    });
}

const addtoCart = (button) => {
    
    let producto = {
        id: button.dataset.id,
        title: button.dataset.title,
        price: button.dataset.price,
        img: button.dataset.image,
        quantity: 1
    } // esta variable crea propiedades cuyos valores los obtienen de los atributos data-, a los cuales se accede mediante el dataset.

    let cart = getCart() // traigo al carrito del localStorage

    if (cart.length) {

        let prodExist = productExists(producto, cart)
            
            if (prodExist) {
                
                cart.forEach(item => {
                
                    if (item.id == prodExist.id) item.quantity++ 

                })

            } else {
            
                cart.push(producto)
            
            };
        
    } else {
    
        cart.push(producto)
    
    }

    saveCart(cart)

}