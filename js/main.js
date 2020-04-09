var probabilidad;
var apostado;
var saldoInicial;
var ganado;
var saldoUpdate;
var cuota;

var random;

var secciones = [];
var tiempo_splash=3000;

window.onload = function(){
    inicializarReferencias();
    setTimeout(cambiarSplash,tiempo_splash);
}

function inicializarReferencias(){
    secciones[1] = document.getElementById("seccion1");
    secciones[2] = document.getElementById("seccion2");
}

function cambiarSplash(){
    secciones[1].className = "splash oculto";
    secciones[2].className = "main";
}

//Acá se ingresa la probabilidad.

function ingresarProbabilidad(){
    
    probabilidad = document.getElementById("probabilidad").value;
    document.getElementById("valorCuota").innerHTML = (1/probabilidad).toFixed(2);
}

//Acá se ingresa el valor apostado.

function ingresarApostado(){
    apostado = document.getElementById("valorApostado").value;
    cuota = document.getElementById("valorCuota").textContent;  
    ganado = cuota*apostado;
}

//Acá se ingresa el saldo inicial.
    
function ingresarSaldoInicial(){
    saldoInicial = document.getElementById("saldoInicial").value;
    document.getElementById("saldoActual").innerHTML = saldoInicial;
}

//Acá se genera el valor ganado y se actualiza el saldo.

function calcularValorGanado(){
    
    //Tengo que hacer un IF que genere un numero random, si ese numero random es igual o menor a la probabilidad dada anteriormente, gana y el valor ganado sera igual al valor apostado*la cuota, si es mayor, pierde y uno de los 2 valores sera 0, para que la multiplicacion sea 0.
    
    random = Math.random();
    if (random <= probabilidad){
        document.getElementById("valorGanado").innerHTML = ganado;
        saldoUpdate = document.getElementById("saldoActual").textContent;
        document.getElementById("saldoActual").innerHTML = saldoUpdate-apostado+ganado;
        return;
    }else
        document.getElementById("valorGanado").innerHTML = 0;
        saldoUpdate = document.getElementById("saldoActual").textContent;
        document.getElementById("saldoActual").innerHTML = saldoUpdate-apostado+0;
    
    
}

function resetear(){
    probabilidad = 0;
    apostado = 0;
    saldoInicial = 0;
    ganado = 0;
    saldoUpdate = 0;
    cuota = 0;
    
    document.getElementById("probabilidad").innerHTML = probabilidad;
    document.getElementById("valorApostado").innerHTML = 0;
    document.getElementById("valorCuota").innerHTML = " ";
    document.getElementById("saldoInicial").innerHTML = 0;
    document.getElementById("saldoActual").innerHTML = " ";
    document.getElementById("valorGanado").innerHTML = " ";
}