let contentProducts = document.getElementById('products')
// document.addEventListener('click', (e) => {
//     if (e.target.id == 'add-cart') {
//         addToCart(e.target)
//     }
// })
// let prod1 = document.getElementById('prod1')
// let prod2 = document.getElementById('prod2')
// let prod3 = document.getElementById('prod3')
// let prod4 = document.getElementById('prod4')
// let prod5 = document.getElementById('prod5')
// let prod6 = document.getElementById('prod6')
// let prod7 = document.getElementById('prod7')
// let prod8 = document.getElementById('prod8')

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
const renderProduct = (product)  => {
    console.log(product);
    
    contentProducts.innerHTML += `
        <div class="col col-center">
            <div class="card text-bg-secondary" >
                <div class="card-body text-center">
                    <a href="/productDetail/${product.id}">
                        <img src="${product.image}" class="card-img-top"
                        alt="...">
                    </a>
                    <h5 class="card-title primary-color">${product.name}</h5>
                    <p class="card-text primary-color">${product.description}</p>
                    <div class="line"></div>
                    <p class="bold primary-color">$${product.price}</p>
                    
                    <button onclick='addtoCart(this)' class="btn btn-outline-primary" id="add-cart-btn"
                        data-id='${product.id}'
                        data-image='${product.image}'
                        data-name='${product.name}'
                        data-description='${product.description}'
                        data-price='${product.price}'
                        >Añadir al carrito
                    </button>
                    <br>
                    <br>
                    <p>Prohibida su venta a menores de 18 años.</p>
                    <!-- amount -->
                </div>
            </div>
        </div>
    `
            // <div class="d-flex justify-content-evenly btn-amount btn">
            //     <button type="button" class="btn btn-outline-primary col-2">-</button>
            //     <input type="text" id="amount" class="btn btn-outline-primary col-4">
            //     <button type="button" class="btn btn-outline-primary col-2">+</button>
            // </div>
    // contentProducts.innerHTML += `
    //     <article>
    //         <img src=${product.image}>
    //         <h3>${product.name}</h3>
    //         <h4>${product.description}</h4>
    //         <br>
    //         <small>${product.price}</small>
    //         <br>
    //     </article>
    //     ` // el (this) le dice 'te paso como parametro a vos mismo

    // <button onclick="addToCart(this)" class="btn btn-outline-primary" id="add-cart" data-id='${product.id}'
    //         data-image='${product.image}'
    //         data-name='${product.name}'
    //         data-description='${product.description}
    //         data-price='${product.price}'>
    //         Agregar al carrito
    //         </button>
}
