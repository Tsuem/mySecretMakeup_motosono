const contenedorProductos = document.getElementById('contenedor-productos')

mostrarProductos()

function mostrarProductos() {

    productos.forEach(el => {
        let div = document.createElement('div')
        div.className = 'container'

        div.innerHTML = `<div class="row">
                            <div class="col-12 col-sm-6 col-md-4 col-lg-4 mb-4">
                                <div class="card text-center h-100 shadow">
                                    <img src=${el.imagen} class="card-img-top" alt="mySecretMakeup producto">
                                    <div class="card-body">
                                        <h5 class="card-title">${el.nombre}</h5>
                                        <p class="card-text mb-2">${el.tipo}</p>
                                        <p class="card-text mb-2">Marca: ${el.marca}</p>
                                        <h6 class="card-subtitle mb-2 text-muted">$ ${el.precio}</h6>
                                        <a href="#" class="card__button fw-bold"><i class="bi bi-plus-circle"></i> AGREGAR</a>
                                    </div>
                                </div>
                            </div>
                        </div>`


                        
         
        contenedorProductos.appendChild(div)             
        
    })
}

