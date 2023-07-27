const products = [
    {
        id: "torta-01",
        titulo: "Torta 01",
        imagen: "../src/assets/tortas/01.jpg",
        categoria:  "Tortas",
        precio: 210,
        stock: 5
    },
    {
        id: "torta-02",
        titulo: "Torta 02",
        imagen: "../src/assets/tortas/02.jpg",
        categoria:  "Tortas",
        precio: 140,
        stock: 5
    },
    {
        id: "torta-03",
        titulo: "Torta 03",
        imagen: "../src/assets/tortas/03.jpg",
        categoria:  "Tortas",
        precio: 280,
        stock: 5
    },
    {
        id: "torta-04",
        titulo: "Torta 04",
        imagen: "../src/assets/tortas/04.jpg",
        categoria:  "Tortas",
        precio: 130,
        stock: 5
    },
    {
        id: "torta-05",
        titulo: "Torta 05",
        imagen: "../src/assets/tortas/05.jpg",
        categoria:  "Tortas",
        precio: 220,
        stock: 5
    },

    {
        id: "galleta-01",
        titulo: "Galleta 01",
        imagen: "../src/assets/galletas/01.jpg",
        categoria:  "Galletas",
        precio: 20,
        stock: 5
    },
    {
        id: "galleta-02",
        titulo: "Galleta 02",
        imagen: "../src/assets/galletas/02.jpg",
        categoria:  "Galletas",
        precio: 80,
        stock: 5
    },
    {
        id: "galleta-03",
        titulo: "Galleta 03",
        imagen: "../src/assets/galletas/03.jpg",
        categoria:  "Galletas",
        precio: 20,
        stock: 5
    },
    {
        id: "galleta-04",
        titulo: "Galleta 04",
        imagen: "../src/assets/galletas/04.jpg",
        categoria:  "Galletas",
        precio: 22,
        stock: 5
    },
    {
        id: "galleta-05",
        titulo: "Galleta 05",
        imagen: "../src/assets/galletas/05.jpg",
        categoria:  "Galletas",
        precio: 25,
        stock: 5
    },
    {
        id: "galleta-06",
        titulo: "Galleta 06",
        imagen: "../src/assets/galletas/06.jpg",
        categoria:  "Galletas",
        precio: 10,
        stock: 5
    },
    {
        id: "galleta-07",
        titulo: "Galleta 07",
        imagen: "../src/assets/galletas/07.jpg",
        categoria:  "Galletas",
        precio: 30,
        stock: 5
    },
    {
        id: "galleta-08",
        titulo: "Galleta 08",
        imagen: "../src/assets/galletas/08.jpg",
        categoria:  "Galletas",
        precio: 25,
        stock: 5
    },

    {
        id: "cupcake-01",
        titulo: "Cupcake 01",
        imagen: "../src/assets/cupcakes/01.jpg",
        categoria:  "Cupcakes",
        precio: 20,
        stock: 5
    },
    {
        id: "cupcake-02",
        titulo: "Cupcake 02",
        imagen: "../src/assets/cupcakes/02.jpg",
        categoria:  "Cupcakes",
        precio: 45,
        stock: 5
    },
    {
        id: "cupcake-03",
        titulo: "Cupcake 03",
        imagen: "../src/assets/cupcakes/03.jpg",
        categoria:  "Cupcakes",
        precio: 50,
        stock: 5
    },
    {
        id: "cupcake-04",
        titulo: "Cupcake 04",
        imagen: "../src/assets/cupcakes/04.jpg",
        categoria:  "Cupcakes",
        precio: 10,
        stock: 5
    },
    {
        id: "cupcake-05",
        titulo: "Cupcake 05",
        imagen: "../src/assets/cupcakes/05.jpg",
        categoria:  "Cupcakes",
        precio: 90,
        stock: 5
    }
]

export const getProducts = () => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products)
        }, 200)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 200)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products.filter(prod => prod.categoria === productCategory))
        }, 200)
    })
}