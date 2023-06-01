document.addEventListener("DOMContentLoaded", () => renderCart());

let purchaseBtn = document.getElementById("purchase-btn");

const renderCart = () => {
  let cart = getCart();
//   if (purchaseBtn) {

//     //   purchaseBtn.addEventListener('click', () => {

//     //       let confirmPurchase = sweetPurchase();
//     //       console.log(confirmPurchase, 'sdkfhj');
//     //       if (confirmPurchase) {
//     //           sweetPurchase(confirm)
//     //       }

//     //   })
//   }

    document.addEventListener('click', (e) => {
        if (cart.length == 0) {
            if (e.target.id == 'purchase-btn') {
                let purchaseError = sweetPurchaseError();
                    if (purchaseError) {
                        sweetPurchaseError(noItems)
                    }
            }
            
        } else {
            if (e.target.id == 'purchase-btn') {
                let confirmPurchase = sweetPurchase();
                    if (confirmPurchase) {
                        sweetPurchase(confirm)
                    }
            }
        
        }

        let anchorSweetConfirm = document.getElementById('anchor-sweet-confirm')

        if (e.target.id == 'anchor-sweet-confirm') {
            clearCart()
        }

        if (e.target.id == 'clear-cart-btn') {
            clearCart()
        }

        let clearCartBtn = document.getElementById('clear-cart-btn')

        if (cart.length == 0) {
            if (e.target.id == 'clear-cart-btn') {
                let purchaseError1 = sweetPurchaseError();
                    if (purchaseError1) {
                        sweetPurchaseError(noItems)
                    }
            }
            
        }
    })

  cart.forEach((product) => {
    //esta funcion crea un bucle en cart, en el que product representa cada elemento de cart

    contentProducts.innerHTML += `
    <div style="min-height: 0;" class="opacity-dark-background">
        <div class="opacity-light-background">
            
                <div class="container-item">
                    <div class="data-item">
                        <div class="img-item">
                            <img style="width: 120px; " src="${product.image}" alt="" srcset="">
                        </div>
                        <div class="text-item">
                            <div class="top-text-item"><p>${product.name}</p></div>
                                <div class="bottom-text-item">
                                    <p>Cantidad: ${product.quantity}</p>
                                    <p>Precio: $${product.price}</p>
                                    <br>
                                    <br>
                                    <div class="remove-item-btn">
                                        <button  
                                        class="btn btn-secondary m-1" 
                                        style="padding: 2px 20px; border: 2px solid #7B2949; border-radius: 5px; position: relative;"
                                        onclick='removeItem(${product.id})' 
                                        > Eliminar </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style=" margin: 15px 16px 30px 15px; width: 95%;" class="line"></div>
                    </div>
                </div>
        </div>
    </div>
                `;
            });
            contentProducts.innerHTML += `
            <div class="opacity-dark-background">
                      <div style="margin-bottom: 250px" class="opacity-light-background">
                      <div class="d-flex justify-content-center align-items-center flex-column">
                          <div class="paragraph-amount">
                              <p style=" text-decoration: underline; font-weight: bold;  ">Total: </p>
                              <p style=" text-decoration: underline; font-weight: bold;  ">$${getTotal()}</p>
                              </div>
                              <div class="line"></div>
                              
                              <button id="purchase-btn" onclick="" class="btn btn-secondary btn-buy m-4 w-75">Comprar</button>
                              <button id="clear-cart-btn"
                              onclick=''
                              style="background-color: #ffd9e2; color: #7B2949; padding: 2px 50px; border: 2px solid #7B2949; border-radius: 5px;"
                              >Limpiar carrito</button>
                          </div>
                      </div>
                      </div>
                    </div>
                      `; // (button onclick='clearCart()'>Limpiar carrito</button>) agrega contenido html para mostrar los detalles, y cuando se toca Eliminar, se usa la funcion removeItem()
};

function clearCart() {
  // borra todos los datos del localStorage, sus claves y valores.
  localStorage.clear();
  // recarga el localStorage.
  location.reload();
}

function removeItem(productId, quantity = null) {
  let cart = getCart(); // llama a la funcion getCart para traer el carrito actual.

  let newCart = cart.filter((product) => product.id != productId); // genera una variable que contenga todos los productos, excepto el que tenga productId pasado como argumento.

  saveCart(newCart); //guarda el nuevo carrito actualizado en la funcion saveCart, para guardarlo en el localStorage.

  location.reload(); // recarga la pagina actual para actualizar el carrito.
}

function getTotal() {
  let cart = getCart(); // trae el carrito actualizado.

  let total = 0; // se guarda el total del precio enuna variable.

  cart.forEach((product) => (total += product.price * product.quantity)); // itera sobre cada producto del carrito, y para cada producto se le multiplica su cantidad por el precio, y ese resultado se guarda en la variable total.

  return total; // retorna el total del precio actualizado.
}
let sweetPurchase = async () => {
    const confirm = await 
        Swal.fire({
            title: 'Compra exitosa!',
            text: 'Gracias por confiar en nosotros.',
            imageUrl: '../img/icons/logo-sin-fondo-1-bordo.png',
            imageWidth: 220,
            imageHeight: 200,
            imageAlt: 'Custom image',
            showDenyButton: false,
            showCancelButton: false,
            confirmButtonColor: '#038c17',
            confirmButtonText: '<a id="anchor-sweet-confirm" style="color: #fff; text-decoration: none; " href="/">Volver al Home</a>',
            customClass: {
                container: 'mi-clase-container',
                popup: 'mi-clase-popup',
                backdrop: 'mi-clase-backdrop',
                title: 'mi-clase-titulo',
                text: 'mi-clase-texto',
                container: 'mi-clase-container'
            }
        })
}

let sweetPurchaseError = async () => {
        const noItems = await Swal.fire({
            icon: 'error',
            title: 'Ups! Algo salió mal!',
            text: 'No tienes productos en el carrito!',
            confirmButtonColor: '#038c17',
            confirmButtonText: 'Aceptar',
            footer: '<a style="color: black; text-decoration: underline; font-weight: bold; " href="/allProduct"><i class="fa-solid fa-hand-back-point-right"></i>Añade productos a tu carrito!<i class="fa-solid fa-hand-back-point-left"></i></a>'
          })
    }
