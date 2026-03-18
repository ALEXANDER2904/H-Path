let numRestar = document.getElementById("numRestar");
let numView = document.getElementById("numView");
let numSumar = document.getElementById("numSumar");
let canProductis = document.getElementById("cantProductos");
let botonEliminar = document.getElementById("eliminar"); 
/*Simulacion de valor entero proveniente de una BD*/
let valorUnitarioProducto = 35000;
let valorUnitarioProductoStr = new Intl.NumberFormat('de-DE').format(valorUnitarioProducto);

document.getElementById("valorUnitarioProducto").innerText = valorUnitarioProductoStr;

numRestar.addEventListener("click", function(){
    let aux = numView.innerHTML.toString();
    let auxInt = parseInt(aux);
    if (auxInt > 0) {
        auxInt--;
        document.getElementById("numView").innerText = auxInt.toString();
        if (auxInt == 1) {
            document.getElementById("cantProductos").innerHTML = auxInt.toString() + " producto.";
        }
        else if (auxInt == 0 || auxInt > 1) {
            document.getElementById("cantProductos").innerHTML = auxInt.toString() + " productos.";
        } 
    }
    let auxSubTotal = auxInt * valorUnitarioProducto;
    let auxSubTotalStr = new Intl.NumberFormat('de-DE').format(auxSubTotal)
    document.getElementById("valorSubtotal").innerHTML = auxSubTotalStr;
})
numSumar.addEventListener("click", function(){
    let aux = numView.innerHTML.toString();
    let auxInt = parseInt(aux);
    if (auxInt < 10) {
        auxInt++;
        document.getElementById("numView").innerText = auxInt.toString();
        if (auxInt == 1) {
            document.getElementById("cantProductos").innerHTML = auxInt.toString() + " producto.";
        }
        else if (auxInt == 0 || auxInt > 1) {
            document.getElementById("cantProductos").innerHTML = auxInt.toString() + " productos.";
        }
}
    let auxSubTotal = auxInt * valorUnitarioProducto;
    let auxSubTotalStr = new Intl.NumberFormat('de-DE').format(auxSubTotal)
    document.getElementById("valorSubtotal").innerHTML = auxSubTotalStr;
})
//ELIMINAR BOTON
botonEliminar.addEventListener("click", function(){
    document.getElementById("numView").innerHTML = "0";
    document.getElementById("cantProductos").innerHTML = "0 productos";
    document.getElementById("valorSubtotal").innerHTML = "0";
})