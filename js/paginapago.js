const precioSubtotalPago = document.getElementById('precioSubtotalPago');
const precioTotalPago = document.getElementById('precioTotalPago');
const contenedorCarritoPago = document.getElementById('carrito-contenedor-pago');
const enviarComprobante = document.getElementById('enviarComprobante')

//TEST
const typeName = document.getElementById('typeName');
const typeCard = document.getElementById('typeCard');
const typeExp = document.getElementById('typeExp');
const typeCode = document.getElementById('typeCode');
let subTotal = 0
let total = 0

window.addEventListener('DOMContentLoaded', () => {
    if (contenedorCarritoPago) {
        calcularTotales()
        mostrarCarrito()
        usuarioActivo()
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
                                    <a class="nav-link" href="./login_and_signup.html" style="color: #594A41;"><i class="bi bi-person-circle"></i> Iniciar Sesión</a>
                                </li>
                            </ul>`
    }
}

const calcularTotales = () => {
    for (let index = 0; index < localStorage.length; index++){
        if (!isNaN(parseInt(localStorage.key(index)))) {
            const element = localStorage.key(index)
            const product = JSON.parse(localStorage.getItem(element))
            subTotal += product.precio
        }
    }
    total = 890 + subTotal
    precioSubtotalPago.innerText = subTotal
    precioTotalPago.innerText = total
}

const mostrarCarrito = () => {
    for (let index = 0; index < localStorage.length; index++){
        if (!isNaN(parseInt(localStorage.key(index)))) {
            const element = localStorage.key(index)
            const product = JSON.parse(localStorage.getItem(element))
            const { nombre, imagen, descripcion, marca, precio, cantidad } = product
            contenedorCarritoPago.innerHTML += `<div class="card-body">
                                                <div class="d-flex justify-content-between">
                                                    <div class="d-flex flex-row align-items-center">
                                                        <div>
                                                            <img src="${imagen}" class="img-fluid rounded-3" alt="Shopping item" style="width: 65px;">
                                                        </div>
                                                        <div class="ms-3">
                                                            <h5>${nombre}</h5>
                                                            <p class="small mb-0">${descripcion}. Marca: ${marca}</p>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center">
                                                        <div style="width: 70px;">
                                                            <p class="fw-normal mb-0">Cant.: ${cantidad}</p>
                                                        </div>
                                                        <div style="width: 70px;">
                                                            <h5 class="mb-0">$${precio}</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>`
        } 
    }
}

if (enviarComprobante) {
    enviarComprobante.addEventListener('click', (e) => enviarEmailCompra(e))
}

function enviarEmailCompra(e){
    if (subTotal > 0) {
        if (localStorage.getItem("activo")) {
            e.preventDefault()
            const valid = validarFormulario(typeName.value, typeCard.value, typeExp.value, typeCode.value)
            if (valid) {
                const usuarioActivo = localStorage.getItem("activo");
                const datausuario = JSON.parse(usuarioActivo);
                emailjs.init('X3M-jA1mwOa5Vqo9k')
                emailjs.send("service_gkhbj94", "template_l8ns0yc", {
                    nombre: `${datausuario.usuario}`,
                    message: `${contenedorCarritoPago.innerHTML}`,
                    total: `${total}`,
                    to_name: `${datausuario.email}`,
                    from_name: "My Secret Makeup",
                })
                .then(function() {
                    for (let index = 0; index < localStorage.length; index++){
                        if (!isNaN(parseInt(localStorage.key(index)))) {
                            const element = localStorage.key(index)
                            localStorage.removeItem(element);
                        }
                    }
                    Swal.fire({
                        icon: 'success',
                        title: 'Compra exitosa!',
                        showCancelButton: true,
                        cancelButtonColor: '#3085d6',
                        cancelButtonText: '<a href="../index.html" style="text-decoration: none; color: white">Ir al inicio</a>',
                        confirmButtonText: '<a href="../pages/productos.html" style="text-decoration: none; color: white">Ver más productos</a>',
                        footer: '<p>Revisá la casilla de tu E-mail!</p>',
                    })
                }, function(error) {
                    console.log('HA FALLADO...', error);
                });
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Inicie sesión antes de hacer el pago', 
            })
        }
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Agregue al menos un Producto al Carrito', 
        })
    }
}

const validarFormulario = (typeName, typeCard, typeExp, typeCode) => {
    if (typeName.trim() != "") {
        if (typeCard.trim().length == 16) {
            if (typeExp.trim() != "") {
                if (typeCode.trim().length == 3) {
                    return true
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Ingrese el Código de Seguridad de la Tarjeta', 
                    })
                }
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Fecha de Expiración Inválida', 
                })
                return false
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Número de Tarjeta Inválido', 
            })
            return false
        }
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ingrese el Nombre del Titular de la Tarjeta', 
        })
        return false
    }
}