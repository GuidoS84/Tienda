let precioProducto = 1000;
let interes = 0;

let seleccion = prompt("SELECCIONAR CUOTAS \n 1 - 3 CUOTAS \n 2 - 6 CUOTAS \n 3 - 12 CUOTAS ");

function recargo(precioProducto, interes){
    return precioProducto + ((precioProducto * interes)/100);
}
console.log(recargo(precioProducto, 10));

switch (seleccion) {
    case "3":
    alert(recargo(precioProducto, 15));
    break;
    case "6":
    alert(recargo(precioProducto, 30));
    break;
    case "12":
    alert(recargo(precioProducto, 50));
    break;
    default:
    break;
}