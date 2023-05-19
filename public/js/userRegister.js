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
  let rol = document.getElementById("rol");

  let button = document.querySelector(
    ".userRegister-buttons-user-register-form"
  );

  button.addEventListener("click", (e) => {
    let errors;
    // e.preventDefault()
    errors = imgFormatUser(image, "image-error");
    if (!errors) e.preventDefault();

    errors = inputIsNotEmptyUser(name, "name-error");
    if (!errors) e.preventDefault();
    errors = inputMinLengthUser(name, 2, "name-length-error");
    if (!errors) e.preventDefault();

    errors = inputIsNotEmptyUser(lastname, "last-name-error");
    if (!errors) e.preventDefault();
    errors = inputMinLengthUser(lastname, 2, "last-name-length-error");
    if (!errors) e.preventDefault();

    errors = inputIsNotEmptyUser(email, "email-error");
    if (!errors) e.preventDefault();

    errors = validateEmailUser(email, "email-validate-error");
    if (!errors) e.preventDefault();

    errors = inputIsNotEmptyUser(username, "name-error");
    if (!errors) e.preventDefault();
    errors = inputMinLengthUser(username, 2, "name-length-error");
    if (!errors) e.preventDefault();

    errors = inputIsNotEmptyUser(password, "password-error");
    if (!errors) e.preventDefault();
    errors = inputMinLengthUser(password, 8, "password-length-error");
    if (!errors) e.preventDefault();

    errors = inputIsNotEmptyUser(confirmpassword, "confirm-password-error");
    if (!errors) e.preventDefault();
    errors = inputMinLengthUser(
      confirmpassword,
      8,
      "confirm-password-length-error"
    );
    if (!errors) e.preventDefault();

    errors = inputIsNotEmptyUser(rol, "confirm-rol-error");
    if (!errors) e.preventDefault();
  });
});
