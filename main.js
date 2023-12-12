
// Para realizar la compra debe ser mayor de 18 años

let edadUsuario = prompt("Por favor, ingresa tu edad:");

if (edadUsuario >= 18) {
    alert("Bienvenido! puede comprar");
} else {
    alert("Lo siento, para comprar debes ser mayores de 18 años.");
}

// Listas de Tareas para el local

let tareas = [];

while (true) {
    let opcion = prompt("¿Qué deseas hacer? (agregar/ver/salir)");

    if (opcion === "agregar") {
        let nuevaTarea = prompt("Ingresa una nueva tarea:");
        tareas.push(nuevaTarea);
        alert("Tarea agregada.");
    } else if (opcion === "ver") {
        alert("Tus tareas son:");
        for (let i = 0; i < tareas.length; i++) {
            alert("- " + tareas[i]);
        }
    } else if (opcion === "salir") {
        alert("Saliendo del programa.");
        break;
    } else {
        console.log("Opción no válida. Intenta de nuevo.");
    }
}

//Calculadora simple para compra 

let operacion = prompt("Selecciona una operación: suma, resta, multiplicación o división");
let numero1 = parseFloat(prompt("Ingresa el primer número:"));
let numero2 = parseFloat(prompt("Ingresa el segundo número:"));

let resultado;

switch (operacion) {
    case "suma":
        resultado = numero1 + numero2;
        break;
    case "resta":
        resultado = numero1 - numero2;
        break;
    case "multiplicación":
        resultado = numero1 * numero2;
        break;
    case "división":
        resultado = numero1 / numero2;
        break;
    default:
        alert("Operación no válida");
        break;
}

if (resultado !== undefined) {
    alert("El resultado de la " + operacion + " es: " + resultado);
}



//funcion


function saludar(saludo, nombre) {
    console.log(`${saludo} ${nombre}`);
}

let saludo = prompt("Ingrese el saludo");
let nombre = prompt("Ingrese el nombre");

saludar("saludo", "nombre");