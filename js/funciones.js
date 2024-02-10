const boton = document.getElementById("boton");
const contenedorProductos = document.getElementById("contenedor-productos");
const contenedorCarrito = document.getElementById("contenedor-carrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const cargarProductosDesdeJSON = async () => {
  try {
    const response = await fetch("js/productos.json");
    const productos = await response.json();
    localStorage.setItem("productos", JSON.stringify(productos));
    mostrarProductos();
  } catch (error) {
    console.error("Error al cargar productos desde JSON:", error);
  }
};

const mostrarProductos = () => {
  const productosJSON = JSON.parse(localStorage.getItem("productos")) || [];

  contenedorProductos.innerHTML = "";

  productosJSON.forEach((producto) => {
    contenedorProductos.innerHTML += `
      <div class="prod-container">
        <img src="${producto.img}" />
        <h2 class="rojo">${producto.nombre}</h2>            
        <p>${producto.categoria}</p>
        <p>$${producto.precio}</p>
        <button data-id="${producto.id}" class="agregar">Agregar al carrito</button>
      </div>
    `;
  });

  // Agregar eventos a los botones "Agregar al carrito"
  document.querySelectorAll('.agregar').forEach((button) => {
    button.addEventListener('click', (event) => {
      const productId = event.target.getAttribute('data-id');
      const producto = productosJSON.find((p) => p.id == productId);
      agregarAlCarrito(producto);
      Swal.fire("Producto agregado!");
    });
  });
};
const agregarAlCarrito = (producto) => {
  const productoEnCarrito = carrito.find((item) => item.id === producto.id);

  if (productoEnCarrito) {
    // Si el producto ya está en el carrito, aumenta la cantidad en 1
    productoEnCarrito.cantidad += 1;
  } else {
    // Si el producto no está en el carrito, agrégalo con cantidad 1
    carrito.push({ ...producto, cantidad: 1 });
  }

  actualizarLocalStorage();
  mostrarCarrito();
};

const mostrarCarrito = () => {
  contenedorCarrito.innerHTML = '<h2 class="carrito">Carrito:</h2>';
  carrito.forEach((item) => {
    contenedorCarrito.innerHTML += `
      <div class="prod-container">
        <img src="${item.img}" />
        <h2 class="azul">${item.nombre}</h2>
        <p>${item.categoria}</p>
        <p>$${item.precio}</p>
        <button class="eliminar" data-id="${item.id}">Eliminar</button>
      </div>
    `;
  });

  // Agregar eventos a los botones "Eliminar"
  document.querySelectorAll('.eliminar').forEach((button) => {
    button.addEventListener('click', () => {
      const itemId = button.getAttribute('data-id');
      eliminarDelCarrito(itemId);
      Swal.fire("Producto eliminado!");
    });
  });
};

const eliminarDelCarrito = (itemId) => {
  carrito = carrito.filter((item) => item.id != itemId);
  actualizarLocalStorage();
  mostrarCarrito();
};


// Evento para vaciar el carrito
boton.addEventListener('click', () => {
  vaciarCarrito();
});

function vaciarCarrito() {
  carrito = [];
  actualizarLocalStorage();
  mostrarCarrito();
  Swal.fire("Carrito Vacío!");
}

function actualizarLocalStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Llama a cargarProductosDesdeJSON y luego muestra los productos
cargarProductosDesdeJSON();



//se me modifica la barra de navegador cuando m
// const manejarBusqueda = () => {
//     const inputBusqueda = document.getElementById('buscar-input'); // Utiliza el ID correcto para tu campo de entrada
//     const resultadosBusqueda = document.getElementById('resultados-busqueda');

//     inputBusqueda.addEventListener('input', () => {
//         const valorBusqueda = inputBusqueda.value.toLowerCase();
//         const resultados = productos.filter(producto =>
//             producto.nombre.toLowerCase().includes(valorBusqueda) ||
//             producto.categoria.toLowerCase().includes(valorBusqueda)
//         );

//         mostrarResultadosBusqueda(resultados, resultadosBusqueda);
//     });
// };

// const mostrarResultadosBusqueda = (resultados, contenedor) => {
//     contenedor.innerHTML = '';

//     if (resultados.length === 0) {
//         contenedor.innerHTML = '<p>Producto no encontrado</p>';
//         return;
//     }

//     resultados.forEach(producto => {
//         contenedor.innerHTML += `
//             <div class="prod-container">
//                 <img src="${producto.img}" />
//                 <h2>${producto.nombre}</h2>
//                 <p>${producto.categoria}</p>
//                 <p>$${producto.precio}</p>
//                 <button id="${producto.id}" class="agregar">Agregar al carrito</button>
//             </div>
//         `;
//     });
// };

// document.addEventListener('DOMContentLoaded', () => {
//     manejarBusqueda();
//     mostrarProductos();
// });

