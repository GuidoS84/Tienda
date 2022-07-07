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



//DOM
const cards = document.getElementById('cardProd');
const contenedorCarrito = document.getElementById('carrito-contenedor')
const botonVaciar = document.getElementById('vaciar-carrito')
const contadorCarrito = document.getElementById('contadorCarrito')
const precioTotal = document.getElementById('precioTotal')

// CARDS PRODUCTOS

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

window.addEventListener("load", () => {
  if (carrito.length > 0) {
    carrito = JSON.parse(localStorage.getItem('carrito'))
    actualizarCarrito();
  }
})


productos.forEach(producto => {
  let card = document.createElement('div')
  card.innerHTML = `
  <div class="card">
                  <img src="${producto.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${producto.nombre}</h5>
                      <p class="card-text">$${producto.precio}</p>
                      <button id= "agregar${producto.id}" class="btn btn-primary boton-agregar">Comprar</button>
                    </div>  
  </div>
`
  cards.appendChild(card);
  
  const boton = document.getElementById(`agregar${producto.id}`)

  boton.addEventListener('click', ()=> {
    console.log(boton);
    agregarAlCarrito(producto.id)
    console.log(carrito);

  })

})
// AGREGA LOS PRODUCTOS AL CARRITO Y PEPETIR CANTIDAD
const agregarAlCarrito = (prodId) => {
  const existe = carrito.some(prod => prod.id == prodId)
    
    if(existe) {
    const prod = carrito.map (prod => {
      if (prod.id === prodId) {
          prod.cantidad++
      }
    })
  }else {
    const item = productos.find((prod) => prod.id === prodId)
    carrito.push(item);
    console.log(item);
    
  }  
actualizarCarrito();
}

// AGREGAMOS UN PROD AL CARRITO

const actualizarCarrito = () => {
  //borra el nodo y despues recorre el array
  contenedorCarrito.innerHTML = "";  
    carrito.forEach((prod) => {
    const div = document.createElement('div')
   
    div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad${prod.cantidad}"></span></p>
        <button id="eliminarDelCarrito${prod.id}" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `
        contenedorCarrito.appendChild(div);

        //setItem
        localStorage.setItem('carrito', JSON.stringify(carrito))
        
  })
  
  contadorCarrito.innerText = carrito.length

  precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0)
  
}



botonVaciar.addEventListener('click', () => {
  carrito.length = 0
  actualizarCarrito()
})
