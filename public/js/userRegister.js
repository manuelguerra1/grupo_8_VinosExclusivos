window.addEventListener("load", (e) => {
    let form = document.querySelector(".user-register-form");
    // let ul = document.querySelector(".errores");
    let image = document.getElementById("image");
    let name = document.getElementById("name");
    let lastname = document.getElementById("last-name");
    let email = document.getElementById("email");
    let username = document.getElementById("user-name");
    let password = document.getElementById("password");
    let confirmpassword = document.getElementById("confirm-password");
    let rol = document.getElementById("rol")
    
    let button = document.querySelector('.userRegister-buttons-user-register-form')
    

button.addEventListener("click", (e) => {
    
    let errors ;
    // e.preventDefault()
    errors = imgFormat(image, 'image-error')
    if (!errors) e.preventDefault();
    
    errors = inputIsNotEmpty(name, 'name-error')
    if (!errors) e.preventDefault();
    errors = inputMinLength(name, 2, 'name-length-error')
    if (!errors) e.preventDefault();

    errors = inputIsNotEmpty(lastname, 'last-name-error')
    if (!errors) e.preventDefault();
    errors = inputMinLength(lastname, 2, 'last-name-length-error')
    if (!errors) e.preventDefault();

    errors = inputIsNotEmpty(email, 'email-error')
    if (!errors) e.preventDefault();

    errors = invalid('email-error')
    if (!errors) e.preventDefault();

    errors = inputIsNotEmpty(username, 'name-error')
    if (!errors) e.preventDefault();
    errors = inputMinLength(username, 2, 'name-length-error')
    if (!errors) e.preventDefault();

    errors = inputIsNotEmpty(password, 'password-error')
    if (!errors) e.preventDefault();
    errors = inputMinLength(password, 8, 'password-length-error')
    if (!errors) e.preventDefault();

    errors = inputIsNotEmpty(confirmpassword, 'confirm-password-error')
    if (!errors) e.preventDefault();
    errors = inputMinLength(confirmpassword, 8, 'confirm-password-length-error')
    if (!errors) e.preventDefault();
 
    errors = inputIsNotEmpty(rol, 'confirm-rol-error')
    if (!errors) e.preventDefault();

  });

});
