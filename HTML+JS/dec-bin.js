function decimalebinario() {
    let numero = document.getElementById("numero").value;
    let decimale = parseInt(numero);

    if (isNaN(decimale)) {
        document.getElementById("risultato").innerHTML = "Inserisci un numero decimale valido!";
        return;
    }

    let binario = decimale.toString(2);
    document.getElementById("risultato").innerHTML = "Risultato in binario: " + binario;
}

function binariodecimale() {
    let numero = document.getElementById("numero").value;

    if (!/^[01]+$/.test(numero)) {
        document.getElementById("risultato").innerHTML = "Inserisci un numero binario valido (solo 0 e 1)!";
        return;
    }

    let decimale = parseInt(numero, 2);
    document.getElementById("risultato").innerHTML = "Risultato in decimale: " + decimale;
}