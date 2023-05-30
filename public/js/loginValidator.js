window.addEventListener("load", (e) => {
    let form = document.querySelector(".login-form");
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    form.addEventListener("submit", (e)=>{
        let errors;
        errors = inputIsNotEmpty(email, 'email-error')
        if (!errors) e.preventDefault();
        errors = validateEmail(email, 'email-validate-error')
        if (!errors) e.preventDefault();
        

        errors = inputIsNotEmpty(password, 'password-error')
        if (!errors) e.preventDefault();
        
    })
    


});
