function MostrarMediana() {
    const inputNumero1 = document.getElementById("InputNumero1");
    const valueNumero1 = inputNumero1.value;
    
    const inputNumero2 = document.getElementById("InputNumero2");
    const valueNumero2 = inputNumero2.value;

    const inputNumero3 = document.getElementById("InputNumero3");
    const valueNumero3 = inputNumero3.value;

    const listaDeNumero = Array(valueNumero1, valueNumero2, valueNumero3);
    listaDeNumero.sort (function (a,b) {return a-b});

    const LonguitudDeLista = listaDeNumero.length;

    const mitadLista = parseInt (listaDeNumero.length / 2);

function esPar (numero) {
    if (numero %2 === 0) {
        const elemento1= listaDeNumero [mitadLista]
        const elemento2= listaDeNumero [mitadLista - 1]
        const mediana = elemento1 + elemento2 / 2;
        return mediana 
        alert (mediana);
    }else {
            const mediana = listaDeNumero [mitadLista];
            return mediana 
            alter (mediana)
        };
    
};

    const VerficarPar = esPar (LonguitudDeLista)
    
    const ParrafoFinal = document.getElementById("Parrafo");
    ParrafoFinal.innerText = "La mediana de los números es de: " + VerficarPar + 
    " .Gracias por usar el programa."
};