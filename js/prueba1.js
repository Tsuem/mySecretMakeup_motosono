//se escoge entre 2 categorías: skincare o makeup
let categoría = Number(prompt("Ingresa una de las siguientes categorías: \n 1-Cuidado de la piel(Skincare) \n 2-Maquillaje(Makeup) \n Para salir ingresa SALIR"))

while (categoría !== "SALIR") {
    switch (categoría) {
        case 1:
            let skincare = prompt("Ingresa una de los siguientes productos: \n 1-Limpiador \n 2-Hidratante \n 3-Mascarilla \n Para salir ingresa SALIR");
            if (skincare === "SALIR") {
                break
            } else {
            while (skincare !== "SALIR") {
                switch (skincare) {
                    //se escoge entre 3 productos
                    case "1":
                        alert("Seleccionaste Limpiador para el Cuidado de la piel(Skincare)")
                        break;
                    case "2":
                        alert("Seleccionaste Hidratante para el Cuidado de la piel(Skincare)")
                        break;
                    case "3":
                        alert("Seleccionaste Mascarilla para el Cuidado de la piel(Skincare)")
                        break;
                    default:
                        alert("Disculpanos que no hayas encontrado lo que buscabas")
                        break;
                }
                skincare = prompt("Ingresa una de los siguientes productos: \n 1-Limpiador \n 2-Hidratante \n 3-Mascarilla \n Para salir ingresa SALIR");
                break;
            }
            categoría = prompt("Ingresa una de las siguientes categorías: \n 1-Cuidado de la piel(Skincare) \n 2-Maquillaje(Makeup) \n Para salir ingresa SALIR");
            }
        case 2:
            let makeup = prompt("Ingresa una de los siguientes productos: \n 1-Labios \n 2-Ojos \n 3-Rostro \n Para salir ingresa SALIR");
            if (makeup === "SALIR") {
                break
            } else {
            while (makeup !== "SALIR") {
                switch (makeup) {
                    //se escoge entre 3 productos
                    case "1":
                        alert("Seleccionaste productos para Labios como Maquillaje(Makeup)")
                        break;
                    case "2":
                        alert("Seleccionaste productos para Ojos como Maquillaje(Makeup)")
                        break;
                    case "3":
                        alert("Seleccionaste productos para Rostro como Maquillaje(Makeup)")
                        break;
                    default:
                        alert("Disculpanos que no hayas encontrado lo que buscabas")
                        break;
                }
                makeup = prompt("Ingresa una de los siguientes productos: \n 1-Labios \n 2-Ojos \n 3-Rostro \n Para salir ingresa SALIR");
                break;
            }
            categoría = prompt("Ingresa una de las siguientes categorías: \n 1-Cuidado de la piel(Skincare) \n 2-Maquillaje(Makeup) \n Para salir ingresa SALIR");
            }
    }
    if(categoria == "SALIR") alert("Gracias por su visita. Espero que vuelva pronto");  
}
