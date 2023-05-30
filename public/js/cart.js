document.addEventListener('DOMContentLoaded', () => renderCart());

let purchaseBtn = document.getElementById('purchase-btn')


const renderCart = () => {
    
    let cart = getCart()
    // if (purchaseBtn) {
        
    //     purchaseBtn.addEventListener('click', () => {
    
    //         let confirmPurchase = sweetPurchase();
    //         console.log(confirmPurchase, 'sdkfhj');
    //         if (confirmPurchase) {
    //             sweetPurchase(confirm)
    //         }
    
    //     })
    // }

    cart.forEach(product =>{ //esta funcion crea un bucle en cart, en el que product representa cada elemento de cart


        contentProducts.innerHTML =
        `
        <div class="opacity-light-background">
            
                <div class="container-item">
                    <div class="data-item">
                        <div class="img-item">
                            <img src="${product.image}" alt="" srcset="">
                        </div>
                        <div class="text-item">
                            <div class="top-text-item"><p>Flirt Vodka Chocolate 1Ltr</p></div>
                            <div class="bottom-text-item">
                                <p>${product.quantity} unidad</p>
                                <p>$${product.price}</p><button onclick='removeItem(${product.id})'> Eliminar </button>
                            </div>
                        </div>
                    </div>
                    <div class="line"></div>
                </div>

                
                <div class="d-flex justify-content-center align-items-center flex-column">
                <div class="paragraph-amount">
                <p>Total: </p>
                <p>$${getTotal()}</p>
                </div>
                
                <button id="purchase-btn" onclick="" class="btn btn-secondary btn-buy m-4 w-75">Comprar</button>
                <br><br><br><button onclick='clearCart()'>Limpiar carrito</button>
                </div>
                </div>
                ` // (button onclick='clearCart()'>Limpiar carrito</button>) agrega contenido html para mostrar los detalles, y cuando se toca Eliminar, se usa la funcion removeItem()
    });
}

function clearCart() {
    // borra todos los datos del localStorage, sus claves y valores.
    localStorage.clear()
    // recarga el localStorage.
    location.reload()
}

function removeItem(productId, quantity = null) {
    let cart = getCart() // llama a la funcion getCart para traer el carrito actual.

    let newCart = cart.filter(product => product.id != productId) // genera una variable que contenga todos los productos, excepto el que tenga productId pasado como argumento.

    saveCart(newCart) //guarda el nuevo carrito actualizado en la funcion saveCart, para guardarlo en el localStorage.

    location.reload() // recarga la pagina actual para actualizar el carrito.

}

 function getTotal() {

    let cart = getCart() // trae el carrito actualizado.

    let total = 0 // se guarda el total del precio enuna variable.

    cart.forEach(product => total += product.price * product.quantity) // itera sobre cada producto del carrito, y para cada producto se le multiplica su cantidad por el precio, y ese resultado se guarda en la variable total.

    return total // retorna el total del precio actualizado.

}
// let sweetPurchase = async () => {
//     const confirm = await Swal.fire({
//             title: 'Sweet!',
//             text: 'Modal with a custom image.',
//             imageUrl: 'https://unsplash.it/400/200',
//             imageWidth: 400,
//             imageHeight: 200,
//             imageAlt: 'Custom image',
//           })
// }
