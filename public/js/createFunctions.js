function inputIsNotEmpty (input, createErrorId) {


    if (input.value == '') {
        
        let nameError = document.getElementById(createErrorId)

        if (nameError) {
            nameError.remove()
        }
        
        let error = document.createElement('p');
                
        error.innerHTML = `El campo no puede estar vacio`
        
        error.setAttribute('id', createErrorId)

        error.classList.add('js-front-prod-create-error')
        
        input.insertAdjacentElement('afterend', error)

        return false


    } else {
        
        let nameError = document.getElementById(createErrorId)
        
        if (nameError) {
            nameError.remove()
        }
        
        return true

    }


}


function inputMinLength (input, length, createErrorId) {


    if (input.value.length < length) {

        let nameError = document.getElementById(createErrorId)

        if (nameError) {
            nameError.remove()
        }
        
        let error = document.createElement('p');
                
        error.innerHTML = `El campo debe tener minimo ${length} caracteres`
        
        error.setAttribute('id', createErrorId)

        error.classList.add('js-front-prod-create-error')
        
        input.insertAdjacentElement('afterend', error)

        return false


    } else {
        
        let nameError = document.getElementById(createErrorId)
        
        if (nameError) {
            nameError.remove()
        }
        
        return true

    }

    
}


function imgFormat(input, createErrorId) {

    let extensions = ['.jpg', '.jpeg', '.png', '.gif']
    let inputExtension = input.value.substring(input.value.lastIndexOf('.'));
    if (!extensions.includes(inputExtension)) {

        let nameError = document.getElementById(createErrorId)

        if (nameError) {
            nameError.remove()
        }
        
        let error = document.createElement('p');
                
        error.innerHTML = `El formato de la imagen tiene que ser: ${extensions.join(', ')}`
        
        error.setAttribute('id', createErrorId)

        error.classList.add('js-front-prod-create-error')
        
        input.insertAdjacentElement('afterend', error)

        return false


    } else {
        
        let nameError = document.getElementById(createErrorId)
        
        if (nameError) {
            nameError.remove()
        }

        console.log('estoy en el else');
        
        return true

    }
}

    function validateEmail(input, createErrorId){
                
        const validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

        if( !validEmail.test(input.value) ){
            let nameError = document.getElementById(createErrorId)

        if (nameError) {
            nameError.remove()
        }
        
        let error = document.createElement('p');
                
        error.innerHTML = `Email invalido`
        
        error.setAttribute('id', createErrorId)

        error.classList.add('js-front-prod-create-error')
        
        input.insertAdjacentElement('afterend', error)

        return false
            
        }else{
            let nameError = document.getElementById(createErrorId)
        
            if (nameError) {
            nameError.remove()
        }
            return true;
        }
    

}

function validateEmailUser(input, createErrorId){
                
    const validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if( !validEmail.test(input.value) ){
        let nameError = document.getElementById(createErrorId)

    if (nameError) {
        nameError.remove()
    }
    
    let error = document.createElement('p');
            
    error.innerHTML = `Email invalido`
    
    error.setAttribute('id', createErrorId)

    error.classList.add('js-front-prod-create-error')
    
    input.insertAdjacentElement('afterend', error)

    return false
        
    }else{
        let nameError = document.getElementById(createErrorId)
    
        if (nameError) {
        nameError.remove()
    }
        return true;
    }


}