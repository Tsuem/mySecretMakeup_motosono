let prop = prompt("Ingresa la propiedad")
let ingreso = prompt("Ingresa un precio")

let encontrado = productos.find((el) => {
    return el[`${prop}`].includes(ingreso);
});

console.log(encontrado);