// TIPO DE BUCLES

/* Ciclos por conteos(FOR!!!)    --> Repiten un bloque de código un número de veces específica.  
for(desde; hasta; actualización) {
    lo que se ejecutará mientras dure el ciclo
} */

/* for (let i = 0; i < 10; i++) {       // i++ => i=i+1    pero si quiero incrementar de a más 2 entonces  i = i + 2
    console.log(i);   
}
 */




/* let ingreso = parseInt(prompt("Ingresa un número"));

for (let i = 0; i <= 10; i++) {
    let resultado = ingreso * i;
    console.log(ingreso + "x" + i + "=" + resultado);
} */




/* let ingreso = parseInt(prompt("Ingresa un número"));
let limite = parseInt(prompt("Ingresa cuantas vcs queres multiplicar"));

for (let i = 0; i <= limite; i++) {
    let resultado = ingreso * i;
    console.log(ingreso + "x" + i + "=" + resultado);
} */



/* let productos = parseInt(prompt("cantidad de productos a comprar"));
let precio = 0;
for (let i = 1; i <= productos; i++) {
    let precioIngresado = parseInt(prompt("Ingresar el precio " + i));
    precio = precio + precioIngresado;
}
console.log(precio); */






// Ciclos condicionales(WHILE y DO...WHILE!!!)  --> Repiten un bloque de código mientras la condición evaluada es true.  