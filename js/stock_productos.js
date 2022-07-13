export const traerProductos = async() => {
    let respuesta = await fetch('../data/productos.json')
    return respuesta.json()
}