//Objetos y Array

class Producto {
	constructor(nombre, color, precio) {
		this.nombre = nombre;
		this.color = color;
		this.precio = precio;
	}
}


const producto1 = new Producto("Nike Air Max Furyosa", "Green", 56000);
const producto2 = new Producto("Nike Air Force", "Withe", 50000);
const producto3 = new Producto("Jordan Air 1 Mid", "Yellow", 62000);
const producto4 = new Producto("Jordan Air Huarache", "Green", 72000);
const producto5 = new Producto("Jordan Air Span", "Blue", 59000);

const arrayProductos = [producto1, producto2, producto3, producto4, producto5];
console.log(arrayProductos);

// Alerts y Prompts

alert("Hola! Te damos la bienvenida :)");
alert("Por favor, indica el número del producto que te interesa para obtener los detalles del mismo :)");

function comprar(){
    let opcion = parseInt(prompt("Nuestros productos: \n 1) " + producto1.nombre + "\n 2) " + producto2.nombre + " \n 3) " + producto3.nombre + "\n 4) " + producto4.nombre + " \n 5) " + producto5.nombre));

    if(opcion > 0 && opcion < 6 ){
        mostrarDetalleProducto(opcion);
    }
    else {
        return alert("Selecciona una opción válida, por favor")
    }

    let confirmacion = confirmarCompra();
    if (confirmacion === "SI" |  confirmacion === "si"){
        alert("El valor de tu compra es de " + arrayProductos[opcion-1].precio)
    } else if (confirmacion === "NO" | confirmacion === "no"){
        alert("Gracias, te esperamos la próxima :)")
    } else {
        alert("Selecciona una opción válida, por favor")
    }
}

function mostrarDetalleProducto(opcion){
    opcion = opcion-1;
    alert("Nombre: " + arrayProductos[opcion].nombre + "\nColor: " + arrayProductos[opcion].color + "\nPrecio: " + arrayProductos[opcion].precio)
}

function confirmarCompra(){
    let x = prompt("Si deseas confirmar la compra, coloca SI, de lo contrario coloca NO");
    return x
}

// CICLO

while(1){
    comprar();
}