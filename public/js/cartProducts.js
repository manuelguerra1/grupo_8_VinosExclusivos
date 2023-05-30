const API = "http://localhost:3008/api/products";

const getProducts = async (api) => {
  // el parametro api representa la url de la api donde se obtendran los datos de los productos.
  try {
    const response = await fetch(api); // se hace una solicitud a la api, y el fetch devuelve una promesa que resuelve en la respuesta de la solicitud.

    const data = await response.json(); // el metodo json analiza el cuerpo de la respuesta como JSON y devuelve una promesa que resuelve como objeto.js.

    return data; // devuelve los datos obtenidos desde la api como resultado.
  } catch (error) {
    console.log("error", error); // agarra el error y lo muestra en consola.
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // inicia la solicitud de los datos de los productos desde la api.
  getProducts(API).then((data) => renderProducts(data)); // cuando los datos estan disponibles desde la api, esta funcion muestra los productos en la pagina.
});

const renderProducts = (products) => {
  products.products.forEach((product) => {
    renderProduct(product);
  });
};

const addtoCart = (button) => {
  // busca si un producto ya existe en el carrito. si existe, se incrementa la cantidad, sino, lo agrega al carrito, y luego, se guarda el carrito actualizado en el localStorage.
  let producto = {
    id: button.dataset.id,
    image: button.dataset.image,
    name: button.dataset.name,
    description: button.dataset.description,
    price: button.dataset.price,
    quantity: 1,
  }; // esta variable crea propiedades cuyos valores los obtienen de los atributos data-, a los cuales se accede mediante el dataset.

  // traigo el carrito der localStorage
  let cart = getCart();

  if (cart.length) {
    // verifica si el carrito tiene productos.

    let product_exists = productExists(producto, cart); // se le pasa el resultado de llamar a la funcion productExists, con producto(el producto a agregar), y el cart(el carrito actualizado con su arreglo).
    console.log("existe", product_exists);

    if (product_exists) {
      cart.forEach((item) => {
        // itera sobre cada elemento del carrito.

        if (item.id == product_exists.id) item.quantity++; // verifica si el id del elemento coinicide con el id del producto existente. si es asi, se incrementa la cantidad del elemento en el carrito 1.
      });
    } else {
      cart.push(producto); // se agrega el producto al cart, osea, se agrega un nuevo producto al carrito.
    }
  } else {
    cart.push(producto); // se agrega el producto al cart, osea, se agrega un nuevo producto al carrito.
  }

  // actualizo el localStorage
  saveCart(cart);
};

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}
