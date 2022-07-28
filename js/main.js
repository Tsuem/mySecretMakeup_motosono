import { traerProductos } from './stock_productos.js'

let filterArray = [];
let carritoDeCompras = [];

const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');

const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');

const selecCategoria = document.getElementById('selecCategoria');
const entradaTexto = document.getElementById('entradaTexto')
const noEncontrado = document.getElementById('noEncontrado')


window.addEventListener('DOMContentLoaded', () => {
    if (contenedorProductos) {
        mostrarProductos()
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

const mostrarProductos = async() => {
    let productos = await traerProductos()
    let productosPanelVista = ''
    productos.forEach(producto => {
        const { imagen, nombre, descripcion, marca, precio, id } = producto
        {
            productosPanelVista +=
            `
            <div class="col-md-6 col-lg-4 col-xl-3 my-4">
                <div class="card text-center h-100">
                    <img src="${imagen}" class="card-img-top" alt="mySecretMakeup >
                    <div class="card-body">
                        <h5 class="card-title mt-3">${nombre}</h5>
                        <p class="card-text mt-2">Descripción: ${descripcion}</p>
                        <p class="card-text">Marca: ${marca}</p>
                        <h6 class="card-subtitle text-muted">$ ${precio}</h6>
                        <a data-id="${id}" id="btnAgregar" class="card__button fw-bold mx-auto mb-3"><i class="bi bi-plus-circle"></i> AGREGAR</a>
                    </div>
                </div>
            </div>
            `
        }
    });
    contenedorProductos.innerHTML = productosPanelVista
}

if (contenedorProductos) {
    contenedorProductos.addEventListener('click', (e) => {
        if (e.target.id === "btnAgregar"){
            Toastify({
                text: "Producto agregado",
                style: {
                    background: "linear-gradient(to right, #F5C6AA, #f39393)",
                },
                duration: 1000
            }).showToast();
            guardarProductos(e.target.dataset.id)
        }
    })
}


const guardarProductos = async(id) => {
    let productos = await traerProductos()
    let productoEncontrado = productos.find(producto => producto.id === parseInt(id))
    let productosStorage = JSON.parse(localStorage.getItem(id))
    if(productosStorage === null){
        localStorage.setItem(id, JSON.stringify({...productoEncontrado, cantidad: 1}))
        recorrerStorage()
        actualizarCarrito()
    }else{
        let productoExiste = JSON.parse(localStorage.getItem(id))
        productoExiste.cantidad = productoExiste.cantidad + 1
        productoExiste.precio = productoExiste.precio + productoEncontrado.precio
        localStorage.setItem(id, JSON.stringify(productoExiste))
        recorrerStorage()
        actualizarCarrito()
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

// actualizar el carrito
function actualizarCarrito(){
    contadorCarrito.innerText = carritoDeCompras.reduce((acc, el) => acc + el.cantidad, 0)
    precioTotal.innerText = carritoDeCompras.reduce((acc, el) => acc + (el.precio), 0)
}

//filtro por categorias
if (selecCategoria) {
    selecCategoria.addEventListener('change', () => {
        if(selecCategoria.value == 'all'){
            mostrarProductos()
        } 
        else {
            mostrarProductosFiltrados()
        }
    })
}

const mostrarProductosFiltrados = async() => {
    let productos = await traerProductos()
    let productosFiltrados = productos.filter(item => item.categoria == selecCategoria.value)
    let productosPanelVista = ''
    productosFiltrados.forEach(producto => {
        const { imagen, nombre, descripcion, marca, precio, id } = producto
        {
            productosPanelVista +=
            `
            <div class="col-md-6 col-lg-4 col-xl-3 my-4">
                <div class="card text-center h-100">
                    <img src="${imagen}" class="card-img-top" alt="mySecretMakeup >
                    <div class="card-body">
                        <h5 class="card-title mt-3">${nombre}</h5>
                        <p class="card-text mt-2">Descripción: ${descripcion}</p>
                        <p class="card-text">Marca: ${marca}</p>
                        <h6 class="card-subtitle text-muted">$ ${precio}</h6>
                        <a data-id="${id}" id="btnAgregar" class="card__button fw-bold mx-auto mb-3"><i class="bi bi-plus-circle"></i> AGREGAR</a>
                    </div>
                </div>
            </div>
            `
        }
    });
    contenedorProductos.innerHTML = productosPanelVista
}

// buscador usando keyup input
if (entradaTexto) {
    entradaTexto.addEventListener("keyup", async () => {
        selecCategoria.value = "all"
        const text = await entradaTexto.value;
        
        // convierte en mayuscula la primera letra de la palabra buscada //
        const str2 = text.charAt(0).toUpperCase() + text.slice(1);
        
        let productos = await traerProductos();
        
        filterArray = productos.filter(function(a){
            if((a.nombre.includes(str2)) || (a.marca.includes(str2)) || (a.categoria.includes(str2)) || (a.subcategoria.includes(str2)) || (a.descripcion.includes(str2))){
                return a.nombre;
            }
        })
        if(entradaTexto.value == ""){
            mostrarProductos();
        }
        else{
            if(filterArray == ""){
                noEncontrado.style.display = 'block';
                contenedorProductos.innerHTML = "";
            }
            else {
                buscarProductos(filterArray);
                noEncontrado.style.display = 'none';
            }
        }
    })
}

const buscarProductos = (filterArray) => {
    let productosPanelVista = ''
    filterArray.forEach(producto => {
        const { imagen, nombre, descripcion, marca, precio, id } = producto
        {
            productosPanelVista +=
            `
            <div class="col-md-6 col-lg-4 col-xl-3 my-4">
                <div class="card text-center h-100">
                    <img src="${imagen}" class="card-img-top" alt="mySecretMakeup >
                    <div class="card-body">
                        <h5 class="card-title mt-3">${nombre}</h5>
                        <p class="card-text mt-2">Descripción: ${descripcion}</p>
                        <p class="card-text">Marca: ${marca}</p>
                        <h6 class="card-subtitle text-muted">$ ${precio}</h6>
                        <a data-id="${id}" id="btnAgregar" class="card__button fw-bold mx-auto mb-3"><i class="bi bi-plus-circle"></i> AGREGAR</a>
                    </div>
                </div>
            </div>
            `
        }
    });
    contenedorProductos.innerHTML = productosPanelVista
}