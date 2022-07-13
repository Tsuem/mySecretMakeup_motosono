/* // mostrar los productos del carrito en la página de pago
function mostrarCarritoPago(productoAgregar) {
    let div = document.createElement('div')
    div.classList.add('card mb-3')
    div.innerHTML = `<div class="card-body">
                        <div class="d-flex justify-content-between">
                            <div class="d-flex flex-row align-items-center">
                                <div>
                                    <img src="https://cdn.shopify.com/s/files/1/0612/7983/0255/products/41_750x.png?v=1641832827" class="img-fluid rounded-3" alt="Shopping item" style="width: 65px;">
                                </div>
                                <div class="ms-3">
                                    <h5>${productoAgregar.nombre}</h5>
                                </div>
                            </div>
                            <div class="d-flex flex-row align-items-center">
                                <div style="width: 50px;">
                                    <h5 class="fw-normal mb-0">${contadorCarrito.innerText}</h5>
                                </div>
                                <div style="width: 80px;">
                                    <h5 class="mb-0">${precioTotal.innerText}</h5>
                                </div>
                                <a href="#!" style="color: #594A41;"><i class="fas fa-trash-alt"></i></a>
                            </div>
                        </div>
                    </div>`

    contenedorCarritoPago.appendChild(div)
} */





/* // actualizar el carrito pago
function actualizarCarritoPago(){
    precioSubtotalPago.innerText = carritoDeCompras.reduce((acc, el) => acc + (el.precio * el.cantidad), 0)
} */


/* contenedorProductos.innerHTML = "";

    for(const product of products) {
        let div = document.createElement('div')
        div.className = 'col-md-6 col-lg-4 my-4'
        div.innerHTML = `
                            <div class="card text-center h-100">
                                <img src="${product.imagen}" class="card-img-top" alt="mySecretMakeup producto">
                                <div class="card-body">
                                    <h5 class="card-title">${product.nombre}</h5>
                                    <p class="card-text mt-2">Descripción: ${product.descripcion}</p>
                                    <p class="card-text">Marca: ${product.marca}</p>
                                    <h6 class="card-subtitle text-muted">$ ${product.precio}</h6>
                                    <a id="boton${product.id}" class="card__button fw-bold"><i class="bi bi-plus-circle"></i> AGREGAR</a>
                                </div>
                            </div>
                        `

        contenedorProductos.appendChild(div)

        let btnAgregar = document.getElementById(`boton${product.id}`)

        btnAgregar.addEventListener('click', () => {
            agregarAlCarrito(product.id);
        })
    } */