 const contenedorProductos = document.getElementById('contenedor-productos');

const productos = [
    {
        id: 1,
        img: "imagenes/ajuar.jpeg",
        nombre: "Ajuar",
        descripcion: "gorro, batita y ranita",
        precio: 10000,
        categoria: "Nena",
    },
    {
        id: 2,
        img: "imagenes/body-m-corta.jpeg",
        nombre: "Body",
        descripcion: "body manga corta, cuello americano",
        precio: 7000,
        categoria: "nena",
    },

    {
        id: 3,
        img: "imagenes/vestidito.jpeg",
        nombre: "Vestido",
        descripcion: "vestido con animales",
        precio: 10000,
        categoria: "nena",
    },

    {
        id: 4,
        img: "imagenes/musculosa-short-varon.jpeg",
        nombre: "Conjunto",
        descripcion: "conjunto de musculosa y short",
        precio: 10000,
        categoria: "nene",
    },

    {
        id: 5,
        img: "imagenes/body-negro.jpeg",
        nombre: "Body",
        descripcion: "body manga corta con monito",
        precio: 7000,
        categoria: "nene",
    },
    {
        id: 6,
        img: "imagenes/osito-varon.jpeg",
        nombre: "Osito",
        descripcion: "osito largo",
        precio: 7000,
        categoria: "nene",
    },

    {
        id: 7,
        img: "imagenes/Babitas.jpeg",
        nombre: "Babitas",
        descripcion: "pack de babitas",
        precio: 4000,
        categoria: "accesorio",
    },

    {
        id: 8,
        img: "imagenes/Toallon.jpeg",
        nombre: "Toallon",
        descripcion: "toallon con capucha + babita",
        precio: 7500,
        categoria: "accesorio",
    },
    {
        id: 9,
        img: "imagenes/Cambiador.jpeg",
        nombre: "Cambiador",
        descripcion: "cambiador con animales",
        precio: 7000,
        categoria: "accesorio",
    },
];


localStorage.setItem("carrito",JSON.stringify(productos))

