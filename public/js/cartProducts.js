const API = 'https://fakestoreapi.com/products'

const getProducts = async(api) => { // el parametro api representa la url de la api donde se obtendran los datos de los productos.
    try {

        const response = await fetch(api) // se hace una solicitud a la api, y el fetch devuelve una promesa que resuelve en la respuesta de la solicitud.

        const data = await response.json() // el metodo json analiza el cuerpo de la respuesta como JSON y devuelve una promesa que resuelve como objeto js.

        return data // devuelve los datos obtenidos desde la api como resultado

    } catch (error) {
        console.log('error', error); // agarra el error y lo muestra en consola
    }
}

document.addEventListener('DOMContentLoaded', () => {
    getProducts(API)
    .then(data => showProduct(data))
})