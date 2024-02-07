let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const contenedorProductos = document.getElementById("contenedorproductos");
const contenedorCarrito = document.getElementById("contenedor-carrito");
const boton = document.getElementById("boton");

const cargarProductosDesdeJSON = async () => {
  try {
    const response = await fetch("js/productos.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al cargar productos desde JSON:", error);
  }
};

const mostrarProductos = async () => {
  const productosJSON = await cargarProductosDesdeJSON();
  contenedorProductos.innerHTML = "";

  productosJSON.forEach((producto) => {
    const productoHTML = `
      <div class="prod-container">
          <img src="${producto.img}" />
          <h2 class="rojo">${producto.nombre}</h2>            
          <p>${producto.categoria}</p>
          <p>$${producto.precio}</p>
          <button id="${producto.id}" class="agregar">Agregar al carrito</button>
      </div>
    `;

    contenedorProductos.innerHTML += productoHTML;

    // Agregar evento de clic al botón "Agregar al carrito"
    const botonAgregar = contenedorProductos.querySelector(`#${producto.id}`);
    botonAgregar.addEventListener("click", () => agregarAlCarrito(producto));
  });
};

const agregarAlCarrito = (producto) => {
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));

  // Llamas a la función para mostrar el carrito actualizado
  mostrarCarrito();
};

const mostrarCarrito = () => {
  contenedorCarrito.innerHTML = "";

  carrito.forEach((item) => {
    contenedorCarrito.innerHTML += `
      <div class="item-carrito">
          <img src="${item.img}" />
          <h2 class="rojo">${item.nombre}</h2>            
          <p>${item.categoria}</p>
          <p>$${item.precio}</p>
          <button id="${item.id}" class="eliminar">Eliminar del carrito</button>
      </div>
    `;
  });

  // Agregar evento de clic a los botones "Eliminar del carrito"
  carrito.forEach((item) => {
    const botonEliminar = contenedorCarrito.querySelector(`#${item.id}`);
    botonEliminar.addEventListener("click", () => eliminarDelCarrito(item.id));
  });
};

const eliminarDelCarrito = (productoId) => {
  carrito = carrito.filter((item) => item.id !== productoId);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
};

// Llamada inicial para mostrar productos y el carrito
mostrarProductos();
mostrarCarrito();

boton.addEventListener("click", () => {
  localStorage.clear();
  mostrarCarrito();
  Swal.fire("Carrito Vacío!");
});

// contenedorProductos.addEventListener('click', (e) => {
//     if (e.target.classList.contains('agregar')) {
//         const id = e.target.id;
//         agregarAlCarrito(id);
//     }
// });

// contenedorCarrito.addEventListener('click', (e) => {
//     if (e.target.classList.contains('eliminar')) {
//         const id = e.target.dataset.id;
//         eliminarProductoDelCarrito(id);
//     }
// });


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
