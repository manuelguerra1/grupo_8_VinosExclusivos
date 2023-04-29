function imgFormat(input, ErrorId) {

    let extensions = ['.jpg', '.jpeg', '.png', '.gif']
    let inputExtension = input.value.substring(input.value.lastIndexOf('.'));
    if (!extensions.includes(inputExtension)) {

        let nameError = document.getElementById(ErrorId)

        if (nameError) {
            nameError.remove()
        }
        
        let error = document.Element('p');
                
        error.innerHTML = `El formato de la imagen tiene que ser: ${extensions.join(', ')}`
        
        error.setAttribute('id', ErrorId)

        error.classList.add('js-front-user-register-error')
        
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
    
function inputIsNotEmpty (input, registerErrorId) {


    if (input.value == '') {
        
        let nameError = document.getElementById(registerErrorId)

        if (nameError) {
            nameError.remove()
        }
        
        let error = document.Element('p');
                
        error.innerHTML = `El campo no puede estar vacio`
        
        error.setAttribute('id', ErrorId)

        error.classList.add('js-front-user-register-error')
        
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


function inputMinLength (input, length, ErrorId) {


    if (input.value.length < length) {

        let nameError = document.getElementById(ErrorId)

        if (nameError) {
            nameError.remove()
        }
        
        let error = document.Element('p');
                
        error.innerHTML = `El campo debe tener minimo ${length} caracteres`
        
        error.setAttribute('id', ErrorId)

        error.classList.add('js-front-user-register-error')
        
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





