let carritoDeCompras = [];


const contenedorCarrito = document.getElementById('carrito-contenedor');
const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');

const lognav = document.getElementById('lognav')
const cerrarSesion = document.getElementById('cerrarSesion')

window.addEventListener('DOMContentLoaded', () => {
    if (contenedorCarrito) {
        usuarioActivo()
        recorrerStorage()
        actualizarCarrito()
    }
})
            
const usuarioActivo = () => {
    const user = localStorage.getItem("activo");
    const datauser = JSON.parse(user);
    if (datauser) {
        lognav.innerHTML = `<ul class="nav justify-content-center mt-3" id="sesion">
                                <li class="nav-item">
                                    <p style="color: #594A41;">Bienvenid@ ${datauser.usuario} ! </p>
                                </li>
                                <li class="nav-item">
                                    <button onClick="cerrarSesion()" class="ms-3" id="cerrarSesion" style="color: #594A41;">Cerrar Sesión <i class="bi bi-door-open-fill"></i></button>
                                </li>
                            </ul>`
    } else {
        lognav.innerHTML = `<ul class="nav justify-content-center" id="sesion">
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/login_and_signup.html" style="color: #594A41;"><i class="bi bi-person-circle"></i> Iniciar Sesión</a>
                                </li>
                            </ul>`
    }
}

const recorrerStorage = () => {
    carritoDeCompras.length = 0
    for (let index = 0; index < localStorage.length; index++){
        if (!isNaN(parseInt(localStorage.key(index)))) {
            const element = localStorage.key(index)
            carritoDeCompras.push(JSON.parse(localStorage.getItem(element)));
        } 
    }
    renderCarrito()
}

const renderCarrito = () => {
    if(carritoDeCompras.length > 0){
        contenedorCarrito.innerHTML = ""
        carritoDeCompras.forEach(producto => {
            const { nombre, precio, cantidad, id } = producto
            contenedorCarrito.innerHTML += `<div class="modal-body">
                                                <div class="container-fluid">
                                                    <div class="row">   
                                                        <p class="col-md-5">${nombre}</p>
                                                        <p class="col-md-2">$ ${precio}</p>
                                                        <p id="cantidad${id}" class="col-md-3">Cant.: ${cantidad} </p>
                                                        <button data-id="${id}" id="btnEliminar" class="col-md-2 boton-eliminar btn" style="background-color: #f1b592; border: none;">Eliminar</button>
                                                    </div>
                                                </div>
                                            </div>`
        });
    } else {
        contenedorCarrito.innerHTML = `<div class="modal-body" id="carritovacio">
                                            <div class="container-fluid">
                                                <div class="row">   
                                                    <p class="col-md-12 text-center fs-4 mt-1">No ha agregado ningún producto</p>
                                                </div>
                                            </div>
                                        </div>`
    }
}


contenedorCarrito.addEventListener('click', (e) => {
    if (e.target.id === "btnEliminar"){
        Toastify({
            text: "Producto eliminado",
            style: {
                background: "linear-gradient(to right, #F5C6AA, #f39393)",
            },
            duration: 1000
        }).showToast();
        localStorage.removeItem(e.target.dataset.id)
        recorrerStorage()
        actualizarCarrito()
    }
})


// actualizar el carrito
function actualizarCarrito(){
    contadorCarrito.innerText = carritoDeCompras.reduce((acc, el) => acc + el.cantidad, 0)
    precioTotal.innerText = carritoDeCompras.reduce((acc, el) => acc + (el.precio), 0)
}