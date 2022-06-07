//Calcular costo total de productos seleccionados por el usuario

let productos = parseInt(prompt("Ingrese el número del producto que necesita comprar: \n 1-Limpiador facial \n 2-Hidratante \n 3-Mascarillas \n Para salir ingresa ADIOS"));
let cantidadAComprar = parseInt(prompt("Ingrese el número de productos que quiere comprar"));
let limpiadorFacial = 6900;
let hidratante = 4500;
let mascarilla = 350;


function productoElegido() {
    if (productos == 1) {
        console.log("El costo total por " + cantidadAComprar + " Limpiadores faciales será de $" + limpiadorFacial * cantidadAComprar);
    } else if (productos == 2) {
        console.log("El costo total por " + cantidadAComprar + " Hidratantes será de $" + hidratante * cantidadAComprar);
    } else {
        console.log("El costo total por " + cantidadAComprar + " Mascarillas será de $" + mascarilla * cantidadAComprar);
    }       
}

console.log(productoElegido());