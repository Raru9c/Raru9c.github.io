//var sumalista = 0;

function CalcularPromedio (lista) {
    //for (var i= 0; i< lista.length; i++)
    //sumalista = sumalista + lista [i];
    //Vamos a aplicar el método reduce para calcular el promedio.

    //La Variable suma lista tendra el parámetro de la funcion CalcularPromedio (lista) y le 
    // aplicaremos el método reduce, que recibe una función que nos permita seumar (en este caso)
    // todos los elementos de la lista.

    //La funcion anónima tendrá como parámetro Valor Acumulado que sería el valor que indica el
    //usuario en consola con el elemento siguiente cuando vuelva a iterar la lista. Así hasta
    // terminar, donde indicamos que retorne la suma de valor acumulado (que le damos un valor 
    //por defecto de 0, y el nuevoElemnto de la lista)



    var sumalista= lista.reduce (
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento
        } 
    );
    
    // promedio tendra el valor de sumalista (que será la suma de todos los elemtnos de la lista)
    //y lo dividirá por la longitud de la lista.
    var promedio = sumalista / lista.length;
    return promedio;
}