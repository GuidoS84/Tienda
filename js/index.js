// PRODUCTO
class Producto {
  constructor(id, nombre, precio, img) {
      this.id = parseFloat (id);
      this.nombre  = nombre.toUpperCase(nombre);
      this.precio  = parseFloat(precio);
      this.img  = img;
      
    }
  sumaIva() {
      this.precio = this.precio * 1.21;
  }
}

// ARRAYS
const productos = [];
productos.push(new Producto(0,"camisa", "15000", "./img/Galeria/IMG_0758-550x550.jpg"));
productos.push(new Producto(1,"blusa", "11500", "./img/Galeria/D04B7B09-2904-411D-9A57-0E394E9F2B51-550x550.jpg" ));
productos.push(new Producto(2, "pantalon", "14200", "./img/Galeria/WhatsApp-Image-2022-04-21-at-9.08.13-AM-1100x1100.jpeg"));
productos.push(new Producto(3, "remera", "4999", "./img/Galeria/IMG_8631-300x300.jpg"));
productos.push(new Producto(4, "remera", "4999", "./img/Galeria/IMG_8507-1100x1100.jpg"));
productos.push(new Producto(5, "remera", "4999", "./img/Galeria/74865E44-25AE-4B02-80C4-93DF32E59FEE-1100x1100.jpeg"));
productos.push(new Producto(6, "remera", "4999", "./img/Galeria/WhatsApp-Image-2022-05-31-at-4.44.36-PM-550x550.jpeg"));
productos.push(new Producto(7, "remera", "4999", "./img/Galeria/WhatsApp-Image-2022-06-03-at-7.59.16-AM-1-550x550.jpeg" ));

for (const producto of productos)
  producto.sumaIva();

console.log(productos);

//CARRITO
const carrito =[];

//DOM
let cards = document.getElementById('cardProd');


productos.forEach(producto => {
  let card = document.createElement('div')
  card.innerHTML = `
  <div class="card">
                  <img src="${producto.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${producto.nombre}</h5>
                      <p class="card-text">$${producto.precio}</p>
                      <button id="comprar" onclick="Comprar(${producto.id})"  class="btn btn-primary">Comprar</button>
                    </div>  
  </div>
`
  cards.append(card);
})

//FUNCIONES
const Comprar = (x) =>{
  carrito.push(productos[x]);
  console.log(carrito);
}

