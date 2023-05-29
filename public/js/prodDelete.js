let deleteBtn = document.getElementById('del-btn-prod-detail')

document.addEventListener('DOMContentLoaded', () => eventDetail())

    const eventDetail = ()=>{
        deleteBtn.addEventListener('click', async (e)=>{
            e.preventDefault()
            
            const confirmation = await sweetConfirm()

            let id = deleteBtn.dataset.productdelete

            const response = await fetch(`http://localhost:3008/api/products/delete/${id}`, {
            method: 'delete',
            })
            
            if(confirmation.isConfirmed){

                if (response.ok) {
                    
                    response
                }

                window.location.href = 'http://localhost:3008/allProduct'
            }
            
        })
    }
    
    const sweetConfirm = async () => {
        const confirm = await Swal.fire({
            title: '¿Estás seguro de que deseas borrar este producto?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonColor: '#038c17',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirmar',
            denyButtonText: `Cancelar`,
            customClass: {
                container: 'mi-clase-container',
                popup: 'mi-clase-popup',
                backdrop: 'mi-clase-backdrop',
                title: 'mi-clase-titulo',
                text: 'mi-clase-texto',
                container: 'mi-clase-container'
            }
        
        })
        if (confirm.isConfirmed) {
          await Swal.fire('¡Producto eliminado!', '', 'success')
                          
        } else if (confirm.isDenied) {
            await Swal.fire('Proceso cancelado.', '', 'warning')
        }
        
        return confirm
    }
    
    // deleteBtn.addEventListener('click', (e) => {
    //     if (deleteBtn) {
    //         console.log('estoy en el boton de eliminar');
    //         e.preventDefault()
    //         // Definición de la función para mostrar el cartel de confirmación
    //         Swal.fire({
    //             title: '¿Estás seguro de que deseas borrar este producto?',
    //             showDenyButton: true,
    //             showCancelButton: false,
    //             confirmButtonColor: '#038c17',
    //             cancelButtonColor: '#d33',
    //             confirmButtonText: 'Confirmar',
    //             denyButtonText: `Cancelar`,
    //             customClass: {
    //                 container: 'mi-clase-container',
    //                 popup: 'mi-clase-popup',
    //                 backdrop: 'mi-clase-backdrop',
    //                 title: 'mi-clase-titulo',
    //                 text: 'mi-clase-texto',
    //                 container: 'mi-clase-container'
    //               }

    //           }).then((result) => {
    //             /* Read more about isConfirmed, isDenied below */
    //             if (result.isConfirmed) {
    //                 Swal.fire('¡Producto eliminado!', '', 'success')
                    
    //                 console.log('prod elimi');
    //                 e.stopImmediatePropagation()
                    
                    
    //             } else if (result.isDenied) {
    //               Swal.fire('Proceso cancelado.', '', 'warning')
    //             }
    //           })
    //         // function mostrarConfirmacion() {
    //         //     var resultado = confirm("¿Estás seguro de que deseas continuar?");
            
    //         //     if (resultado) {
    //         //     // El usuario hizo clic en "Aceptar"
    //         //     console.log("El usuario ha confirmado.");
    //         //     // Aquí puedes ejecutar el código que deseas realizar si el usuario confirma
    //         //     } else {
    //         //     // El usuario hizo clic en "Cancelar"
    //         //     console.log("El usuario ha cancelado.");
    //         //     // Aquí puedes ejecutar el código que deseas realizar si el usuario cancela
    //         //     }
    //         // }
            
    //         // Llamada a la función después de su definición
    //         // mostrarConfirmacion();
            
    //     }
    // })
