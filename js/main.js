let filterArray = [];

mostrarProductos(productosArray)

function mostrarProductos(currArray){

    document.getElementById("contenedor-productos").innerText = "";

    for(let i = 0 ; i < currArray.length; i++){
        document.getElementById("contenedor-productos").innerHTML += `
            <div class="col-md-6 col-lg-4 my-4">
                <div class="card text-center h-100">
                    <img src="${currArray[i].imagen}" class="card-img-top" alt="mySecretMakeup producto">
                    <div class="card-body">
                        <h5 class="card-title">${currArray[i].nombre}</h5>
                        <p class="card-text mt-3">Descrip. : ${currArray[i].descripcion}</p>
                        <p class="card-text">Marca: ${currArray[i].marca}</p>
                        <h6 class="card-subtitle my-1 text-muted">$ ${currArray[i].precio}</h6>
                        <a href="#" class="card__button fw-bold"><i class="bi bi-plus-circle"></i> AGREGAR</a>
                    </div>
                </div>
            </div>
        `
    }
}




/* buscador usando keyup input */
document.getElementById("myInput").addEventListener("keyup",function(){
    let text = document.getElementById("myInput").value;

    /* convierte en mayuscula la primera letra de la palabra buscada */
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
            document.getElementById("noEncontrado").style.display = 'block';
            document.getElementById("contenedor-productos").innerHTML = "";
        }
        else {
            mostrarProductos(filterArray);
            document.getElementById("noEncontrado").style.display = 'none';
        }
    }
})