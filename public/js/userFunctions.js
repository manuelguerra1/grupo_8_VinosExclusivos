function imgFormatUser(input, ErrorId) {

    let extensions = ['.jpg', '.jpeg', '.png', '.gif','.JPG','.JPEG', '.PNG', '.GIF']
    let inputExtension = input.value.substring(input.value.lastIndexOf('.'));
        inputExtension = inputExtension.toLowerCase()
    if (!extensions.includes(inputExtension)) {
 
        let nameError = document.getElementById(ErrorId)

        if (nameError) {
            nameError.remove()
        }
        
        let error = document.Element('p');
                
        error.innerHTML = `El formato de la imagen tiene que ser: ${extensions.join(', ')}`
        
        error.setAttribute('id', ErrorId)

        error.classList.add('js-front-prod-create-error')
        
        input.insertAdjacentElement('afterend', error)

        return false


    } else {
        
        let nameError = document.getElementById(ErrorId)
        
        if (nameError) {
            nameError.remove()
        }
        
        return true

    }
}
    
function inputIsNotEmptyUser (input, registerErrorId) {


    if (input.value == '') {
        
        let nameError = document.getElementById(registerErrorId)

        if (nameError) {
            nameError.remove()
        }
        
        let error = document.Element('p');
                
        error.innerHTML = `El campo no puede estar vacio`
        
        error.setAttribute('id', registerErrorId)

        error.classList.add('js-front-prod-create-error')
        
        input.insertAdjacentElement('afterend', error)

        return false


    } else {
        
        let nameError = document.getElementById(ErrorId)
        
        if (nameError) {
            nameError.remove()
        }
        
        return true

    }


} 


function inputMinLengthUser (input, length, ErrorId) {


    if (input.value.length < length) {

        let nameError = document.getElementById(ErrorId)

        if (nameError) {
            nameError.remove()
        }
        
        let error = document.Element('p');
                
        error.innerHTML = `El campo debe tener minimo ${length} caracteres`
        
        error.setAttribute('id', ErrorId)

        error.classList.add('js-front-prod-create-error')
        
        input.insertAdjacentElement('afterend', error)

        return false


    } else {
        
        let nameError = document.getElementById(ErrorId)
        
        if (nameError) {
            nameError.remove()
        }
        
        return true

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





