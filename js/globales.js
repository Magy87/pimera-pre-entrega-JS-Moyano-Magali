const contenedorProductos = document.getElementById("contenedor-productos");
const contenedorCarrito = document.getElementById("contenedor-carrito");

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
        categoria: "Nena",
    },

    {
        id: 3,
        img: "imagenes/vestidito.jpeg",
        nombre: "Vestido",
        descripcion: "vestido con animales",
        precio: 10000,
        categoria: "Nena",
    },

    {
        id: 4,
        img: "imagenes/musculosa-short-varon.jpeg",
        nombre: "Conjunto",
        descripcion: "conjunto de musculosa y short",
        precio: 10000,
        categoria: "Nene",
    },

    {
        id: 5,
        img: "imagenes/body-negro.jpeg",
        nombre: "Body",
        descripcion: "body manga corta con monito",
        precio: 7000,
        categoria: "Nene",
    },
    {
        id: 6,
        img: "imagenes/osito-varon.jpeg",
        nombre: "Osito",
        descripcion: "osito largo",
        precio: 7000,
        categoria: "Nene",
    },

    {
        id: 7,
        img: "imagenes/Babitas.jpeg",
        nombre: "Babitas",
        descripcion: "pack de babitas",
        precio: 4000,
        categoria: "Accesorio",
    },

    {
        id: 8,
        img: "imagenes/Toallon.jpeg",
        nombre: "Toallon",
        descripcion: "toallon con capucha + babita",
        precio: 7500,
        categoria: "Accesorio",
    },
    {
        id: 9,
        img: "imagenes/Cambiador.jpeg",
        nombre: "Cambiador",
        descripcion: "cambiador con animales",
        precio: 7000,
        categoria: "Accesorio",
    },
];


// localStorage.setItem("carrito",JSON.stringify(productos))

JSON.parse(localStorage.getItem("productos")) ||
  localStorage.setItem("productos", JSON.stringify(productos));
//   JSON.parse(localStorage.getItem("carrito")) || localStorage.setItem("carrito", JSON.stringify([]))