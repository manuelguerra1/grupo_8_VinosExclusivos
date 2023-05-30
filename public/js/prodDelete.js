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
