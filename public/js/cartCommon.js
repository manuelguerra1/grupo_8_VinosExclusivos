let cartContent = document.getElementById('cart-Products') // agarra el div de carrito.ejs

function saveCart(cart) {
    // esta linea de codigo guarda su contenido en el almacenamiento local del navegador, con una key de cart, y el valor de la key tiene que ser si o si un string, por eso se usa el JSON.stringify
    localStorage.setItem('cart', JSON.stringify(cart))
}

function getCart() {
    // esta funcion agarra el carrito de compras almacenado en el almacenamiento local y lo devuelve como un objeto js, o un array vacio si no se encuentra ningun valor.
    return JSON.parse(localStorage.getItem('cart')) || []
}

function productExists(product, cart){
    // esta linea de codigo recibe como parametro un item, que representa cada item de cart, despues compara el atributo item.id con el id del product (parametro de la funcion), y luego, si la comparacion se encuentra, devuelve el elemento. 
    return cart.find(item => item.id == product.id)
}

// esta funcion le agrega contenido HTMl al producto cuando se renderice.
const showProduct = (product) => {
    cartContent.innerHTML += `
    <h3>${product.title}</h3>
    <small>$${product.price}</small>
    <img src="${product.image}" width="130">
    <br>
    `
}
