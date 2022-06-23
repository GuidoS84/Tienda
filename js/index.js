
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
productos.push(new Producto("camisa", "15000"));
productos.push(new Producto("blusa", "11500"));
productos.push(new Producto("pantalon", "14200"));


let nombreProducto = prompt('Cargue nombre de producto nuevo')
let precioProducto = prompt('Cargue precio del producto nuevo')
productos.push(new Producto(nombreProducto, precioProducto));

for (const producto of productos)
  producto.sumaIva();

console.log(productos);

let productoElegido = prompt("Ingrese nombre de producto que desea comprar");
const resultado = productos.find((el) => el.nombre === productoElegido.toUpperCase(productoElegido));

console.log(resultado);
