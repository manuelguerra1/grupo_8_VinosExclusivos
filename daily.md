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

Agregamos una imagen en el json para ver porque no elimina un producto, hay que controlar el unlinksync xq tira error ahi **

Y en productController cambiamos la ruta xq también estaba imgs y es product

---1 de marzo---
En esta estapa vamos a modificar el logo de login para llamar PERFIL que vamos a crear con la intencion de que en esta parte pueda editar sus datos de usuario.

Para esto vamos a crear un nuevo EJS con los datos extraido del registro que van a tener un boton EDITAR, un boton CANCELAR y un boton GUARDAR.

3/3/23 ** Se arreglo destroy, comentando el unlinksync. 

5/3 -Recordar implementar pop-up con condicion de mayor de edad.
    -Armamos controlador-ruta-formulario para usuarios, presento errores. La solucion se encontro agregando enctype="multipart/form-data" en la etiqueta form del register.ejs. Info sacada de la documentacion de multer.
    -Implementacion del login, correcion del form. Pasan datos correctos en formato json del nombre usuario y password.
    -Encriptamos el password con bcrypt y le agregamos la sal, son los caracteres especiales.

6/3 Realizamos middlewares: session, cookies (las configuramos, pero aun no estan implementadas). Resolvimos el loggeo, ahora el boton de profile se encuentra funcionando. Una vez loggeado se muestra los datos del usuario. 
- Agregamos guestMiddleware que se encargar de revisar que el cliente este logueado. En caso de que no lo este lo dirige al login, de caso contrario puede navegar por toda la pagina. 

10/3 Creamos authMiddleware verifica que el usuario este logueado, y nos muestra en el nav el boton de profile. En caso de que no lo este muestra login y register. Falta terminar userSessionMiddleware.

13/3 Revisamos inicio de sesion, mi perfil, cierre de sesion y comentamos la edicion del usuario porque no lo piden en ninguno de los sprint. Y no funciona el controlador para editar usuarios, suponemos que es porque ahora utilizamos la cookie, userLogged.

18/03 
Nos reunimos Anto, Diego, Lili y Vivi armamos tabla de usuarios, instalamos sequelize y configuramos todo para largar cuando nos aprueben las tablas relacionales.
comentamos los header de Css de los archivos excepto el partial porque lo estaban pisando. No se veia que se hubiera trabajado del modo mobile first. Queda pendiente arreglar la vista en version mobile para poder seguir con las media querie de tablet y Desktop. Usuario para probar username: test2 password: test2123 // Fixeamos el proyecto ya se encuentra funcionando login. 