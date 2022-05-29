function Calculo (precio, descuento){
    var CalculoPrecio = (precio * (100-descuento))/100;
    return CalculoPrecio;
}


function CalculoDeDescuento(){
    var inputPrecio = document.getElementById ("PrecioInput");
    var ValuePrecio = inputPrecio.value;

    var inputDescuento = document.getElementById ("DescuentoInput");
    var ValueDescuento = inputDescuento.value;

    var PrecioFinal = Calculo (ValuePrecio, ValueDescuento);

    var ParrafoFinal = document.getElementById ("ParrafoFinal");
    ParrafoFinal.innerText = "El precio con descuento es de: " + PrecioFinal;
}

