import { traerProductos } from './stock_productos.js'

let filterArray = [];
let carritoDeCompras = [];

const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');
const contenedorCarritoPago = document.getElementById('carrito-contenedor-pago');

const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');

const selecCategoria = document.getElementById('selecCategoria');
const entradaTexto = document.getElementById('entradaTexto')
const noEncontrado = document.getElementById('noEncontrado')



window.addEventListener('DOMContentLoaded', () => {
    mostrarProductos()
})

const mostrarProductos = async() => {
    let productos = await traerProductos()
    let productosPanelVista = ''
    console.log(productos);
    productos.forEach(producto => {
        const { imagen, nombre, descripcion, marca, precio, id } = producto
        {
            productosPanelVista +=
            `
            <div class="col-md-6 col-lg-4 my-4">
                <div class="card text-center h-100">
                    <img src="${imagen}" class="card-img-top" alt="mySecretMakeup >
                    <div class="card-body">
                        <h5 class="card-title mt-3">${nombre}</h5>
                        <p class="card-text mt-2">Descripción: ${descripcion}</p>
                        <p class="card-text">Marca: ${marca}</p>
                        <h6 class="card-subtitle text-muted">$ ${precio}</h6>
                        <a id="boton${id}" class="card__button fw-bold mx-auto mb-3"><i class="bi bi-plus-circle"></i> AGREGAR</a>
                    </div>
                </div>
            </div>
            `
        }
    });
    contenedorProductos.innerHTML = productosPanelVista
/*
    let btnAgregar = document.getElementById(`boton${producto.id}`)

    btnAgregar.addEventListener('click', () => {
        agregarAlCarrito(producto.id);
    }) */
}
    


/* // agregar al carrito
function agregarAlCarrito(id){
    let yaExiste = carritoDeCompras.find(elemento => elemento.id == id)
    if(yaExiste){
        yaExiste.cantidad = yaExiste.cantidad + 1
        document.getElementById(`cantidad${yaExiste.id}`).innerHTML = `<p id="cantidad${yaExiste.id}" class="col-md-3">Cant.: ${yaExiste.cantidad} </p>`
        actualizarCarrito()
    }else{
        let productoAgregar = productosArray.find(ele => ele.id === id)
        productoAgregar.cantidad = 1
    carritoDeCompras.push(productoAgregar)
    actualizarCarrito()
    mostrarCarrito(productoAgregar)
    }
}


// mostrar los productos del carrito
function mostrarCarrito(productoAgregar) {
    let div = document.createElement('div')
    div.classList.add('modal-body')
    div.innerHTML = `<div class="container-fluid">
                        <div class="row">   
                            <p class="col-md-5">${productoAgregar.nombre}</p>
                            <p class="col-md-2">$ ${productoAgregar.precio}</p>
                            <p id="cantidad${productoAgregar.id}" class="col-md-4">Cant.: ${productoAgregar.cantidad} </p>
                            <button id="eliminar${productoAgregar.id}" class="col-md-1 boton-eliminar" style="border: none; background-color: #FFFFFF;"><i class="bi bi-trash-fill"></i></button>
                        </div>
                    </div>`
    contenedorCarrito.appendChild(div)

    let btnEliminar = document.getElementById(`eliminar${productoAgregar.id}`)
    btnEliminar.addEventListener('click',() => {
        if(productoAgregar.cantidad == 1){
            btnEliminar.parentElement.remove()
            carritoDeCompras = carritoDeCompras.filter(item => item.id !== productoAgregar.id)
            actualizarCarrito()
        }else{
            productoAgregar.cantidad = productoAgregar.cantidad - 1
            document.getElementById(`cantidad${productoAgregar.id}`).innerHTML = `<p id="cantidad${productoAgregar.id}" class="col-md-3">Cant.: ${productoAgregar.cantidad} </p>`
            actualizarCarrito()
        }
    
    })
}



// actualizar el carrito
function actualizarCarrito(){
    contadorCarrito.innerText = carritoDeCompras.reduce((acc, el) => acc + el.cantidad, 0)
    precioTotal.innerText = carritoDeCompras.reduce((acc, el) => acc + (el.precio * el.cantidad), 0)
}


//filtro por categorias
selecCategoria.addEventListener('change', () => {
    if(selecCategoria.value == 'all'){
        mostrarProductos(productosArray)
    } else {
        mostrarProductos(productosArray.filter(item => item.categoria == selecCategoria.value))
    }
})


// buscador usando keyup input
entradaTexto.addEventListener("keyup", () => {
    const text = entradaTexto.value;

    // convierte en mayuscula la primera letra de la palabra buscada //
    const str2 = text.charAt(0).toUpperCase() + text.slice(1);

    filterArray = productosArray.filter(function(a){
        if((a.nombre.includes(str2)) || (a.marca.includes(str2)) || (a.categoria.includes(str2)) || (a.subcategoria.includes(str2)) || (a.descripcion.includes(str2))){
            return a.nombre;
        }
    });
    if(this.value == ""){
        mostrarProductos(productosArray);
    }
    else{
        if(filterArray == ""){
            noEncontrado.style.display = 'block';
            document.contenedorProductos.innerHTML = "";
        }
        else {
            mostrarProductos(filterArray);
            noEncontrado.style.display = 'none';
        }
    }
}) */