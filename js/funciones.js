const boton = document.getElementById("boton");
const contenedorProductos = document.getElementById("contenedor-productos");
const contenedorCarrito = document.getElementById("contenedor-carrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//traer producto de json
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

//Productos disponibles

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

  document.querySelectorAll('.agregar').forEach((button) => {
    button.addEventListener('click', (event) => {
      const productId = event.target.getAttribute('data-id');
      const producto = productosJSON.find((p) => p.id == productId);
      agregarAlCarrito(producto);
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Producto Agregado"
      });
    });
  });
};

const agregarAlCarrito = (producto) => {
  const productoEnCarrito = carrito.find((item) => item.id === producto.id);
  if (productoEnCarrito) {
    productoEnCarrito.cantidad += 1;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }
  actualizarLocalStorage();
  mostrarCarrito();
};

//carrito

const mostrarCarrito = () => {
  contenedorCarrito.innerHTML = '';
  carrito.forEach((item) => {
    contenedorCarrito.innerHTML += `
      <div class="prod-container">
        <img src="${item.img}" />
        <h2 class="azul">${item.nombre}</h2>
        <p>${item.categoria}</p>
        <p>$${item.precio}</p>
        <p>Cantidad: ${item.cantidad || 1}</p>
        <button class="eliminar" data-id="${item.id}">Eliminar</button>
      </div>
    `;
  });

  document.querySelectorAll('.eliminar').forEach((button) => {
    button.addEventListener('click', () => {
      const itemId = button.getAttribute('data-id');
      eliminarDelCarrito(itemId);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Eliminado",
        showConfirmButton: false,
        timer: 1000,      });
    });
  });
};

const eliminarDelCarrito = (itemId) => {
  carrito = carrito.filter((item) => item.id != itemId);
  actualizarLocalStorage();
  mostrarCarrito();
};

// vaciar el carrito
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
cargarProductosDesdeJSON();
