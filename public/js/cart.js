document.addEventListener('DOMContentLoaded', () => renderCart());

const renderCart = () => {
    
    let cart = getCart()

    cart.forEach(product => {
        //esta funcion crea un bucle en cart, en el que product representa cada elemento de cart
        showProduct(product)// muestra el producto
        //agrega contenido html para mostrar los detalles, y cuando se toca Eliminar, se usa la funcion removeItem()
        cartContent.innerHTML += ` 
        <small>${product.stock}</small>
        <button onclick="removeItem(${product.id})">Eliminar</button>
        <br> 
    `;
    });

    cartContent.innerHTML += `
    <p>Total: ${getTotal()}</p>
    <br>
    <button onclick="clearCart()">Limpiar carrito</button>
    ` // agrega otro contenido, mostrando el total, y cuando se toca limpiar carrito, se utiliza la funcion clearCart()
}

function clearCart() {
    // borra todos los datos del localStorage, sus claves y valores.
    localStorage.clear()
    // recarga el localStorage.
    localStorage.reload()
}

function removeItem(productId, stock = null) {
    let cart = getCart() // llama a la funcion getCart para traer el carrito actual.

    let newCart = cart.filter(product => product.id != productId) // genera una variable que contenga todos los productos, excepto el que tenga productId pasado como argumento.

    saveCart(newCart) //guarda el nuevo carrito actualizado en la funcion saveCart, para guardarlo en el localStorage.

    location.reload() // recarga la pagina actual para actualizar el carrito.

}

function getTotal() {

    let cart = getCart() // trae el carrito actualizado.

    let total = 0 // se guarda el total del precio enuna variable.

    cart.forEach(product => total += product.price * product.stock) // itera sobre cada producto del carrito, y para cada producto se le multiplica su cantidad por el precio, y ese resultado se guarda en la variable total.

    return total // retorna el total del precio actualizado.

}