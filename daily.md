25/2 Sprint 5
- repasamos el metodo multer de productos
- acomodamos las imagenes y borramos todo lo que estabamos usando ni usariamos
- organizamos la semana acordando dias y horarios para trabajar en el proyecto.
- solucionamos un error en una imagen en allproduct.ejs corrigiendo el path.
- se cambio el json de producto en la categoria imagen, para accder solo con el nombre del archivo de la imagen, esto facilitara en el formulario de creacion la carga de imagenes.
- se termino el punto 4 del sprint.

opcional
- implementar conocimiento de fs.unlinkSync para poder eliminar un archivo de imagen en destroy. productsController.js linea 138

objetivo semanal:
- implementar la entidad de usuarios
- implementar el registro de usuarios 5 y 6 del sprint.
- borrar links y poner imagenes en los metodos de pagos del footer.ejs
- css de imagenes ver si funciona con esto la resolucion de la imagen de los productos  "Width
object-fit: cover; o contain"

revisar devolucion de Ro
Al editar producto, no tienen para editar la imagen del mismo, solo aparece la imagen (que en realidad no aparece tampoco porque aparentemente están rotas las rutas, seguro porque ya están con las modificaciones para el siguiente sprint) 
<!-- Corregido en la linea 82 de productEditForm.ejs le agregue /img/imgs antes del <%=>
 <img class="edit-form-img-edit-form" src="/img/imgs/<%= product.image%>"> -->

El input de $$ solo debería aceptar números. 
// <input type="number" name="price" id="price" value="<%= product.price %>">

Cuando estamos en la vista de edición o detalle de , las imagenes no se ven. (por lo dicho arriba)

Se crean perfecto los productos, se editan correctamente, pero se rompe al querer eliminar. 

Saludos muy buen trabajo y a seguir asi 💪

27 de Febrero
Cambiamos la ruta de multerMilddleware xq estaba imgs y es product la carpeta.

Agregamos una imagen en el json para ver porque no elimina un producto, hay que controlar el unlinksync xq tira error ahi

Y en productController cambiamos la ruta xq también estaba imgs y es product
