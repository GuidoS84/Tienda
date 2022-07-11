// PRODUCTO
class Producto {
    constructor(id, nombre, precio, cantidad, img) {
        this.id = parseFloat (id);
        this.nombre  = nombre.toUpperCase(nombre);
        this.precio  = parseFloat(precio);
        this.cantidad = parseFloat(cantidad);
        this.img  = img;
        
      }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
  }
  
  // ARRAYS
  const productos = [];
  productos.push(new Producto(0,"camisa", "12000","1", './img\galeria\D04B7B09-2904-411D-9A57-0E394E9F2B51-550x550.jpg'));
  productos.push(new Producto(1,"blusa", "11500", "1", ));
  productos.push(new Producto(2, "pantalon", "14200", "1", ""));
  productos.push(new Producto(3, "remera", "4999", "1", "" ));
  productos.push(new Producto(4, "Bluza", "4999", "1", ""));
  productos.push(new Producto(5, "remera", "4999", "1", ""));
  productos.push(new Producto(6, "remera", "4999", "1", ""));
  productos.push(new Producto(7, "remera", "4999", "1", "" ));
  
  for (const producto of productos)
    producto.sumaIva();
  
  console.log(productos);


const cards = document.getElementById('cardProd');
const contenedorCarrito = document.getElementById('carrito-contenedor')
const botonVaciar = document.getElementById('vaciar-carrito')
const contadorCarrito = document.getElementById('contadorCarrito')

const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')

let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})
botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})

//INYECTAR EL HTML
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
    

//AGREGAR AL CARRITO
const agregarAlCarrito = (prodId) => {

    //PARA AUMENTAR LA CANTIDAD Y QUE NO SE REPITA
    const existe = carrito.some (prod => prod.id === prodId) //comprobar si el elemento ya existe en el carro

    if (existe){ //SI YA ESTÁ EN EL CARRITO, ACTUALIZAMOS LA CANTIDAD
        const prod = carrito.map (prod => { //creamos un nuevo arreglo e iteramos sobre cada curso y cuando
            // map encuentre cual es el q igual al que está agregado, le suma la cantidad
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else { //EN CASO DE QUE NO ESTÉ, AGREGAMOS EL PRODUCTO AL CARRITO
        const item = productos.find((prod) => prod.id === prodId)//Trabajamos con las ID
        //Una vez obtenida la ID, lo que haremos es hacerle un push para agregarlo al carrito
        carrito.push(item)
    }
    //Va a buscar el item, agregarlo al carrito y llama a la funcion actualizarCarrito, que recorre
    //el carrito y se ve.
    actualizarCarrito() 
}
// agregarAlCarrito(1) //Le pasamos el ID por parametro. Tenemos que asigarle como evento esta funcion al boton
//con el id de su producto correspondiente


const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item) //Busca el elemento q yo le pase y nos devuelve su indice.

    carrito.splice(indice, 1) //Le pasamos el indice de mi elemento ITEM y borramos 
    // un elemento 
    actualizarCarrito() 
    //MODIFICA EL CARRITO
    console.log(carrito)
}

const actualizarCarrito = () => {
    //LOS APPENDS SE VAN ACUMULANDO CON LO QE HABIA ANTES
    contenedorCarrito.innerHTML = "" //Cada vez que yo llame a actualizarCarrito, lo primero q hago
    //es borrar el nodo. Y despues recorro el array lo actualizo de nuevo y lo rellena con la info
    //actualizado
    //Por cada producto creamos un div con esta estructura y le hacemos un append al contenedorCarrito (el modal)
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        contenedorCarrito.appendChild(div)
        
        localStorage.setItem('carrito', JSON.stringify(carrito))

    })
    
    contadorCarrito.innerText = carrito.length // actualizamos con la longitud del carrito.
    // console.log(carrito)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
    //Por cada producto q recorro en mi carrito, al acumulador le suma la propiedad precio, con el acumulador
    //empezando en 0.

}