const productos = [
    {id: 1, nombre: "Clean It Zero Cleansing Balm", marca: "Banila Co.", precio: 8000, categoria: "Cuidado de la piel", subcategoria: "Limpiador facial", tipo: "Aceite limpiador facial"},
    {id: 2, nombre: "Rice Water Bright Light Cleansing Oil", marca: "The Face Shop", precio: 7000, categoria: "Cuidado de la piel", subcategoria: "Limpiador facial", tipo: "Aceite limpiador facial"},
    {id: 3, nombre: "Rice Water Bright Cleansing Foam", marca: "The Face Shop", precio: 6900, categoria: "Cuidado de la piel", subcategoria: "Limpiador facial", tipo: "Espumas de limpieza"},
    {id: 4, nombre: "Hydrating Cleansing Foam with Green Tea", marca: "Innisfree", precio: 6900, categoria: "Cuidado de la piel", subcategoria: "Limpiador facial", tipo: "Espumas de limpieza"},
    {id: 5, nombre: "All in One Snail Repair Cream", marca: "Mizon", precio: 5000, categoria: "Cuidado de la piel", subcategoria: "Hidratante"},
    {id: 6, nombre: "Hyaluronic Acid Intensive Cream", marca: "COSRX", precio: 5950, categoria: "Cuidado de la piel", subcategoria: "Hidratante"},
    {id: 7, nombre: "My Real Squeeze Mask", marca: "Innisfree", precio: 200, categoria: "Cuidado de la piel", subcategoria: "Mascarillas de Tela"},
    {id: 8, nombre: "Joyful Time Essence Mask", marca: "Mizon", precio: 350, categoria: "Cuidado de la piel", subcategoria: "Mascarillas de Tela"},
    {id: 9, nombre: "Dear Darling Water Gel Tint", marca: "Etude House", precio: 1500, categoria: "Maquillaje", subcategoria: "Labios"},
    {id: 10, nombre: "Zero Velvet Tint", marca: "Romand", precio: 3100, categoria: "Maquillaje", subcategoria: "Labios"},
    {id: 11, nombre: "Waterproof Pen Liner Kill", marca: "Clio", precio: 3600, categoria: "Maquillaje", subcategoria: "Ojos", tipo: "Delineadores"},
    {id: 12, nombre: "Oh My Line", marca: "Etude House", precio: 2000, categoria: "Maquillaje", subcategoria: "Ojos", tipo: "Delineadores"},
    {id: 13, nombre: "Play Color Eyes Cherry Blossom", marca: "Etude House", precio: 5940, categoria: "Maquillaje", subcategoria: "Ojos", tipo: "Paleta de Sombras"},
    {id: 14, nombre: "Better Than Palette Rosebud Garden", marca: "Romand", precio: 8250, categoria: "Maquillaje", subcategoria: "Ojos", tipo: "Paleta de Sombras"},
    {id: 15, nombre: "Saemmul Perfect Curling Mascara", marca: "The Saem", precio: 4500, categoria: "Maquillaje", subcategoria: "Ojos", tipo: "Máscara de Pestañas"},
    {id: 16, nombre: "Lash Perm Curl Fix Mascara", marca: "Etude House", precio: 3600, categoria: "Maquillaje", subcategoria: "Ojos", tipo: "Máscara de Pestañas"},
    {id: 17, nombre: "Snail Repair Intensive BB cream", marca: "Mizon", precio: 4900, categoria: "Maquillaje", subcategoria: "Rostro", tipo: "BB cream"},
    {id: 18, nombre: "M Perfect Cover Blemish Balm BB cream", marca: "Missha", precio: 5600, categoria: "Maquillaje", subcategoria: "Rostro", tipo: "BB cream"},
    {id: 19, nombre: "Matte Mineral Setting Powder", marca: "Innisfree", precio: 2300, categoria: "Maquillaje", subcategoria: "Rostro", tipo: "Polvos traslúcidos"},
    {id: 20, nombre: "Zero Sebum Drying Powder", marca: "Etude House", precio: 10100, categoria: "Maquillaje", subcategoria: "Rostro", tipo: "Polvos traslúcidos"},
    {id: 21, nombre: "Kill Cover Glow Fitting Cushion", marca: "Clio", precio: 2100, categoria: "Maquillaje", subcategoria: "Rostro", tipo: "Cushion"},
]


productos.push({id: 22, nombre: "The Original Tension Cushion", marca: "Missha", precio: 6900, categoria: "Maquillaje", subcategoria: "Rostro", tipo: "Cushion"});


for (let i = 0; i < productos.length; i++) {
    console.log(productos[i])
}

const resultado = productos.filter((la) => la.marca === "Romand" )
console.log(resultado);