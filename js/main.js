const productos = [
    {
        id: 1, 
        nombre: "Clean It Zero Cleansing Balm", 
        marca: "Banila Co.", 
        precio: 8000, 
        stock: 5, 
        categoria: "Cuidado de la piel", 
        subcategoria: "Limpiador facial", 
        tipo: "Aceite limpiador facial", 
        imagen: "https://cdn.shopify.com/s/files/1/0612/7983/0255/products/41_750x.png?v=1641832827"
    },
    {
        id: 2, 
        nombre: "Rice Water Bright Light Cleansing Oil", 
        marca: "The Face Shop", 
        precio: 7000, 
        stock: 6, 
        categoria: "Cuidado de la piel", 
        subcategoria: "Limpiador facial", 
        tipo: "Aceite limpiador facial", 
        imagen: "https://bellekr.com/wp-content/uploads/2021/04/Rice-Water-Bright-Rich-Cleansing-Oil-BELLE.jpg"
    },
    {
        id: 3, 
        nombre: "Rice Water Bright Cleansing Foam", 
        marca: "The Face Shop", 
        precio: 6900, 
        stock: 8, 
        categoria: "Cuidado de la piel", 
        subcategoria: "Limpiador facial", 
        tipo: "Espumas de limpieza", 
        imagen: "https://cf.shopee.ph/file/39a10b31b6907917412a9067ec77d81d"
    },
    {
        id: 4, 
        nombre: "Hydrating Cleansing Foam with Green Tea", 
        marca: "Innisfree", 
        precio: 6900, 
        stock: 4,
        categoria: "Cuidado de la piel", 
        subcategoria: "Limpiador facial", 
        tipo: "Espumas de limpieza", 
        imagen: "https://cdn.shopify.com/s/files/1/0221/2433/1104/products/78855259_2944763665534335_7748994082935930880_n_520x.progressive.jpg?v=1631369589"
    },
    {
        id: 5, 
        nombre: "All in One Snail Repair Cream", 
        marca: "Mizon", 
        precio: 5000, 
        stock: 11, 
        categoria: "Cuidado de la piel", 
        subcategoria: "Hidratante", 
        imagen: "https://cdn.shopify.com/s/files/1/0254/3022/9055/products/MizonAllInOneSnailRepairCreamkoreanskincarenetherlands4_80ba2f29-c6b5-43cf-ad26-12297909621c.jpg?v=1599033039"
    },
    {
        id: 6, 
        nombre: "Hyaluronic Acid Intensive Cream", 
        marca: "COSRX", 
        precio: 5950, 
        stock: 7, 
        categoria: "Cuidado de la piel", 
        subcategoria: "Hidratante", 
        imagen: "https://kbeauty.com.bd/wp-content/uploads/2021/07/cosrx-hyaluronic-acid-cream-600x600.jpg"
    },
    {
        id: 7, 
        nombre: "My Real Squeeze Mask", 
        marca: "Innisfree", 
        precio: 200, 
        stock: 2, 
        categoria: "Cuidado de la piel", 
        subcategoria: "Mascarillas de Tela", 
        imagen: "https://img.joomcdn.net/baebda8a02269562a1a4f3e3bab0f46c558220be_original.jpeg"
    },
    {
        id: 8, 
        nombre: "Joyful Time Essence Mask", 
        marca: "Mizon", 
        precio: 350, 
        stock: 6, 
        categoria: "Cuidado de la piel", 
        subcategoria: "Mascarillas de Tela", 
        imagen: "https://ae01.alicdn.com/kf/H85a8f9eba194476a818e10d90a4848a3Y/MIZON-Joyful-Time-Essence-Mask-23g-cuidado-Facial-planta-Natural-m-scara-Facial-hoja-hidratante-calmante.jpg_Q90.jpg_.webp"
    },
    {
        id: 9, 
        nombre: "Dear Darling Water Gel Tint", 
        marca: "Etude House", 
        precio: 1500, 
        stock: 6, 
        categoria: "Maquillaje", 
        subcategoria: "Labios", 
        imagen: "https://www.etude.com/int/en/media/catalog/product/cache/07b96aa9f5b70f577958b488444f8dd2/d/e/dear-darling-water-gel-tint-01.jpg"
    },
    {
        id: 10, 
        nombre: "Zero Velvet Tint", 
        marca: "Romand", 
        precio: 3100, 
        stock: 7, 
        categoria: "Maquillaje", 
        subcategoria: "Labios", 
        imagen: "https://img.joomcdn.net/c373779737f6d0cbd0e518c669d13688823072aa_original.jpeg"
    },
    {
        id: 11, 
        nombre: "Waterproof Pen Liner Kill", 
        marca: "Clio", 
        precio: 3600, 
        stock: 3, 
        categoria: "Maquillaje", 
        subcategoria: "Ojos", 
        tipo: "Delineadores", 
        imagen: "https://www.kmarket.com.bd/wp-content/uploads/2020/08/CLIO-WATERPROOF-PEN-LINER-KILL-BLACK-BROWN-0.55ML.jpg"
    },
    {
        id: 12, 
        nombre: "Oh My Line", 
        marca: "Etude House", 
        precio: 2000, 
        stock: 10, 
        categoria: "Maquillaje", 
        subcategoria: "Ojos", 
        tipo: "Delineadores", 
        imagen: "https://www.etude.com/int/en/media/catalog/product/cache/07b96aa9f5b70f577958b488444f8dd2/1/0/102002110_01_540_540.jpg"
    },
    {
        id: 13, 
        nombre: "Play Color Eyes Cherry Blossom", 
        marca: "Etude House", 
        precio: 5940, 
        stock: 5, 
        categoria: "Maquillaje", 
        subcategoria: "Ojos", 
        tipo: "Paleta de Sombras", 
        imagen: "https://cdn.shopify.com/s/files/1/0060/0539/1458/products/product_119_1024x1024_f701eddf-44ca-4ef7-bb79-85fe20ccec76_1200x1200.png?v=1616960009"
    },
    {
        id: 14, 
        nombre: "Better Than Palette Rosebud Garden", 
        marca: "Romand", 
        precio: 8250, 
        stock: 8, 
        categoria: "Maquillaje", 
        subcategoria: "Ojos", 
        tipo: "Paleta de Sombras", 
        imagen: "https://cdn.shopify.com/s/files/1/0534/2337/4503/products/54e8a14c96614b47b0f54355d51da6f7_101f0eef-dd8f-45b9-8bab-63f795e33096_1200x.jpg?v=1625709769"
    },
    {
        id: 15, 
        nombre: "Saemmul Perfect Curling Mascara", 
        marca: "The Saem", 
        precio: 4500, 
        stock: 8, 
        categoria: "Maquillaje", 
        subcategoria: "Ojos", 
        tipo: "Máscara de Pestañas", 
        imagen: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/225/266/products/2cdd0f5fc27c766ec5722129f84c42c31-77a9097fc9ffe764e915947642293156-1024-1024.jpeg"
    },
    {
        id: 16, 
        nombre: "Lash Perm Curl Fix Mascara", 
        marca: "Etude House", 
        precio: 3600, 
        stock: 9, 
        categoria: "Maquillaje", 
        subcategoria: "Ojos", 
        tipo: "Máscara de Pestañas", 
        imagen: "https://www.etude.com/int/en/media/catalog/product/cache/07b96aa9f5b70f577958b488444f8dd2/1/0/101002079_02_540_540.jpg"
    },
    {
        id: 17, 
        nombre: "Snail Repair Intensive BB cream", 
        marca: "Mizon", 
        precio: 4900, 
        stock: 12, 
        categoria: "Maquillaje", 
        subcategoria: "Rostro", 
        tipo: "BB cream", 
        imagen: "https://m.media-amazon.com/images/I/517YcrEeonL._SL1000_.jpg"
    },
    {
        id: 18, 
        nombre: "M Perfect Cover Blemish Balm BB cream", 
        marca: "Missha", 
        precio: 5600, 
        stock: 2, 
        categoria: "Maquillaje", 
        subcategoria: "Rostro", 
        tipo: "BB cream", 
        imagen: "https://img.joomcdn.net/22b8b16208e05cb0a74726e4c8f4171a3fd814a2_original.jpeg"
    },
    {
        id: 19, 
        nombre: "Matte Mineral Setting Powder", 
        marca: "Innisfree", 
        precio: 2300, 
        stock: 9, 
        categoria: "Maquillaje", 
        subcategoria: "Rostro", 
        tipo: "Polvos traslúcidos", 
        imagen: "https://i0.wp.com/seouloftokyo.co.za/wp-content/uploads/2019/12/Innisfree-No-Sebum-Mineral-Powder.jpg?fit=800%2C800&ssl=1"
    },
    {
        id: 20, 
        nombre: "Zero Sebum Drying Powder", 
        marca: "Etude House", 
        precio: 10100, 
        stock: 5, 
        categoria: "Maquillaje", 
        subcategoria: "Rostro", 
        tipo: "Polvos traslúcidos", 
        imagen: "https://file.hstatic.net/1000373761/file/b546bae9f39e0bc0528f_331f7579fa164450886892a61590b11c_grande.jpg"
    },
    {
        id: 21, 
        nombre: "Kill Cover Glow Fitting Cushion", 
        marca: "Clio", 
        precio: 2100, 
        stock: 3, 
        categoria: "Maquillaje", 
        subcategoria: "Rostro", 
        tipo: "Cushion", 
        imagen: "https://linkstore.vn/wp-content/uploads/2020/01/Phan-nuoc-Clio-Kill-Cover-Glow-Cushion-1.jpg"
    },
    {
        id: 22, 
        nombre: "The Original Tension Cushion", 
        marca: "Missha", 
        precio: 6900, 
        stock: 10, 
        categoria: "Maquillaje", 
        subcategoria: "Rostro", 
        tipo: "Cushion", 
        imagen: "https://cf.shopee.vn/file/f0ffd3eb94f385e050e338b6b72ba4e9"
    }
]


let precioBuscado = prompt("Ingresa el precio máximo a pagar (el precio mínimo es de 200)")
let categoria = prompt("Escribe si buscas Maquillaje o Cuidado de la piel")
let actualizacion = prompt("Ingrese el porcentaje de aumento(número mayor a 1)")

const resultado = productos.filter((el) => el.precio < precioBuscado && el.categoria === categoria)
console.log(resultado)

const actualizacionPrecio = productos.map((el) => {
    return {
        precio: el.precio * actualizacion
    }
})
console.log(actualizacionPrecio);
