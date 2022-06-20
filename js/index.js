
class Producto {
  constructor(nombre, precio) {
      this.nombre  = nombre.toUpperCase(nombre);
      this.precio  = parseFloat(precio);
      this.vendido = false;
  }
  sumaIva() {
      this.precio = this.precio * 1.21;
  }
}

const productos = [];
productos.push(new Producto("camisa", "15999"));
productos.push(new Producto("blusa", "11750"));
productos.push(new Producto("pantalon", "14220"));


let nombreProducto = prompt('ingrese nombre del producto nuevo')
let precioProducto = prompt('ingrese precio del producto nuevo')
productos.push(new Producto(nombreProducto, precioProducto));

for (const producto of productos)
  producto.sumaIva();

console.log(productos);


// let precioProducto = 1000;
// let interes = 0;

// let seleccion = prompt("SELECCIONAR CUOTAS \n 1 - 3 CUOTAS \n 2 - 6 CUOTAS \n 3 - 12 CUOTAS ");

// function recargo(precioProducto, interes){
//     return precioProducto + ((precioProducto * interes)/100);
// }
// console.log(recargo(precioProducto, 10));

// switch (seleccion) {
//     case "3":
//     alert(recargo(precioProducto, 15));
//     break;
//     case "6":
//     alert(recargo(precioProducto, 30));
//     break;
//     case "12":
//     alert(recargo(precioProducto, 50));
//     break;
//     default:
//     break;
// }

