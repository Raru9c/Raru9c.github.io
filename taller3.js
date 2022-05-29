var sumalista = 0;

function CalcularPromedio (lista) {
    for (var i= 0; i< lista.length; i++)
    sumalista = sumalista + lista [i];
    var promedio = sumalista / lista.length;
    return promedio;
}