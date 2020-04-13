//Variables modo manual.

var probabilidad;
var apostado = 0;
var saldoInicial;
var ganado;
var saldoUpdate;
var cuota;
var saldoActual = 0;

var valorApostado;
var valorSaldoActual;
var valorProbabilidad;

var random;
var i = 0;

//Variables modo automatico.

var saldoInicialAutomatico;
var apuestaEconomizadorConservadora;
var apuestaDerrochadoraConservadora;
var apuestaEconomizadorArriesgada;
var apuestaDerrochadorArriesgada;

var numEconomizadorConservadora;
var numDerrochadoraConservadora;
var numEconomizadorArriesgada;
var numDerrochadorArriesgada;

var j = 0;
var randomEconomizadorConservadora;
var randomDerrochadoraConservadora;
var randomEconomizadorArriesgada;
var randomDerrochadorArriesgada;

var aleatorioEconomizadorConservadora;
var aleatorioDerrochadoraConservadora;
var aleatorioEconomizadorArriesgada;
var aleatorioDerrochadorArriesgada;

var saldoUpdateAutomatico;
var cuotaUpdateAutomatica;
var saldoActualAutomatico;
var saldoFinal;
var ultimoSaldoFinal;
var ultimoValorGanado;
var valorUltimoSaldo;

var intApostado;
var intGanado;
var intActual;

var final;

var compararEconomizadorConservadora;
var compararDerrochadoraConservadora;
var compararEconomizadorArriesgada;
var compararDerrochadorArriesgada;

//Variables "globales"

var secciones = [];
var tiempo_splash=3000;





window.onload = function(){
    inicializarReferencias();
    setTimeout(cambiarSplash,tiempo_splash);
}

function inicializarReferencias(){
    secciones[1] = document.getElementById("seccion1");
    secciones[2] = document.getElementById("seccion2");
    secciones[3] = document.getElementById("seccion3");
    secciones[4] = document.getElementById("seccion4");
    secciones[5] = document.getElementById("seccion5");
    secciones[6] = document.getElementById("seccion6");
    secciones[7] = document.getElementById("seccion7");
    secciones[8] = document.getElementById("seccion8");
    secciones[9] = document.getElementById("seccion9");
    secciones[10] = document.getElementById("seccion10");
    secciones[11] = document.getElementById("seccion11");
}

function cambiarSplash(){
    secciones[1].className = "splash oculto";
    secciones[11].className = "menu animated bounceInDown";
}

function modoManual(){
    secciones[11].className = "menu oculto";
    secciones[2].className = "main";
}

function modoAutomatico(){
    secciones[11].className = "menu oculto";
    secciones[3].classList = "automatico";
}

function backAutomatico(){
    secciones[3].className = "automatico oculto";
    secciones[11].className = "menu";
}

function backManual(){
    secciones[2].className = "main oculto";
    secciones[11].className = "menu";
    resetear();
}

function backProbabilidad(){
    secciones[4].className = "probabilidad oculto";
    secciones[3].className = "automatico";
}

function backApostado(){
    secciones[5].className = "conservadora oculto";
    secciones[6].className = "arriesgada oculto";
    secciones[4].className = "probabilidad";
}

                                                                                                //Este sera el modo manual.

//Acá se ingresa la probabilidad.

function ingresarProbabilidad(){
    
    probabilidad = document.getElementById("probabilidad").value;
    valorProbabilidad = parseInt(probabilidad, 10);
    
    if(valorProbabilidad<0 || valorProbabilidad>1){
        window.alert("Ingrese un valor entre 0 y 1");
        document.getElementById("probabilidad").value = "";
    }else
        document.getElementById("valorCuota").innerHTML = (1/probabilidad).toFixed(2); 
}

//Acá se ingresa el valor apostado.

function ingresarApostado(){
    apostado = document.getElementById("valorApostado").value;
    cuota = document.getElementById("valorCuota").textContent;
    saldoActual = document.getElementById("saldoActual").textContent;
    
    valorApostado = parseInt(apostado, 10);
    valorSaldoActual = parseInt(saldoActual, 10);
    
    if(valorApostado>valorSaldoActual){
        window.alert("El valor apostado es mayor a su saldo, ingrese un valor válido");
        document.getElementById("valorApostado").value = "";
        return;
    }else
    ganado = cuota*apostado;
}

//Acá se ingresa el saldo inicial.
    
function ingresarSaldoInicial(){
    saldoInicial = document.getElementById("saldoInicial").value;
    document.getElementById("saldoActual").innerHTML = saldoInicial;
    saldoActual = document.getElementById("saldoActual").textContent;
    valorSaldoActual = parseInt(saldoActual, 10);
    
    añadirDatos();

}

//Acá se genera el valor ganado y se actualiza el saldo.

function calcularValorGanado(){
    
    if(probabilidad == "" || apostado == "" || saldoInicial == ""){
        window.alert("Por favor ingrese todos los valores");
        return;
    }else
    
        //Tengo que hacer un IF que genere un numero random, si ese numero random es igual o menor a la probabilidad dada anteriormente, gana y el valor ganado sera igual al valor apostado*la cuota, si es mayor, pierde y uno de los 2 valores sera 0, para que la multiplicacion sea 0.

        random = Math.random();
        if (random <= probabilidad){
            document.getElementById("valorGanado").innerHTML = ganado.toFixed(0);
            saldoUpdate = document.getElementById("saldoActual").textContent;
            document.getElementById("saldoActual").innerHTML = (saldoUpdate-apostado+ganado).toFixed(0);
            saldoActual = document.getElementById("saldoActual").textContent;
            valorSaldoActual = parseInt(saldoActual, 10);
            i++;
            añadirDatos();

            return;
        }else
            document.getElementById("valorGanado").innerHTML = 0;
            saldoUpdate = document.getElementById("saldoActual").textContent;
            document.getElementById("saldoActual").innerHTML = saldoUpdate-apostado+0;
            i++;
            saldoActual = document.getElementById("saldoActual").textContent;
            valorSaldoActual = parseInt(saldoActual, 10);
            añadirDatos();

        if(valorSaldoActual<=0){
            window.alert("Saldo insuficiente");
            resetear();
        }

    
}

//Acá se reinician todos los valores.

function resetear(){
    probabilidad = 0;
    apostado = 0;
    saldoInicial = 0;
    ganado = 0;
    saldoUpdate = 0;
    cuota = 0;
    i = 0;
    valorSaldoActual = 0;
    
    
    
    
    document.getElementById("probabilidad").value = " ";
    document.getElementById("valorApostado").value = " ";
    document.getElementById("valorCuota").innerHTML = " ";
    document.getElementById("saldoInicial").value = " ";
    document.getElementById("saldoActual").innerHTML = " ";
    document.getElementById("valorGanado").innerHTML = " ";
    
    borrarDatos();
}

function resetAutomatico(){
    secciones[7].className = "conservadora_economizadora oculto";
    secciones[8].className = "conservadora_derrochadora oculto";
    secciones[9].className = "arriesgada_economizadora oculto";
    secciones[10].className = "arriesgada_derrochadora oculto";
    secciones[3].className = "automatico";
    
    i = 0;
    saldoInicialAutomatico = 0;
    apuestaEconomizadorConservadora = 0;
    apuestaDerrochadoraConservadora = 0;
    apuestaEconomizadorArriesgada = 0;
    apuestaDerrochadorArriesgada = 0;

    numEconomizadorConservadora = 0;
    numDerrochadoraConservadora = 0;
    numEconomizadorArriesgada = 0;
    numDerrochadorArriesgada = 0;

    j = 0;
    randomEconomizadorConservadora = 0;
    randomDerrochadoraConservadora = 0;
    randomEconomizadorArriesgada = 0;
    randomDerrochadorArriesgada = 0;

    aleatorioEconomizadorConservadora = 0;
    aleatorioDerrochadoraConservadora = 0;
    aleatorioEconomizadorArriesgada = 0;
    aleatorioDerrochadorArriesgada = 0;

    saldoUpdateAutomatico = 0;
    cuotaUpdateAutomatica = 0;
    saldoActualAutomatico = 0;
    saldoFinal = 0;
    ultimoSaldoFinal = 0;
    ultimoValorGanado = 0;
    valorUltimoSaldo = 0;

    intApostado = 0;
    intGanado = 0;
    intActual = 0;

    final = 0;

    compararEconomizadorConservadora = 0;
    compararDerrochadoraConservadora = 0;
    compararEconomizadorArriesgada = 0;
    compararDerrochadorArriesgada = 0;
    
    document.getElementById("saldoInicialAutomatico").value = " ";
    
    //Conservador Economizador
    
    document.getElementById("saldoInicialConservadoraEconomizadora").innerHTML = " ";
    document.getElementById("ultimoSaldoConservadoraEconomizadora").innerHTML = " ";
    document.getElementById("apuestasConservadoraEconomizadora").value = " ";
    document.getElementById("probabilidadConservadoraEconomizadora").innerHTML = " ";
    document.getElementById("ultimoValorConservadoraEconomizadora").innerHTML = " ";
    document.getElementById("ultimaCuotaConservadoraEconomizadora").innerHTML = " ";
    document.getElementById("ultimoGanadoConservadoraEconomizadora").innerHTML = " ";
    
    //Conservador Derrochador
    
    document.getElementById("saldoInicialConservadoraDerrochadora").innerHTML = " ";
    document.getElementById("ultimoSaldoConservadoraDerrochadora").innerHTML = " ";
    document.getElementById("apuestasConservadoraDerrochadora").value = " ";
    document.getElementById("probabilidadConservadoraDerrochadora").innerHTML = " ";
    document.getElementById("ultimoValorConservadoraDerrochadora").innerHTML = " ";
    document.getElementById("ultimaCuotaConservadoraDerrochadora").innerHTML = " ";
    document.getElementById("ultimoGanadoConservadoraDerrochadora").innerHTML = " ";
    
    //Arriesgada Economizador
    
    document.getElementById("saldoInicialArriesgadaEconomizadora").innerHTML = " ";
    document.getElementById("ultimoSaldoArriesgadaEconomizadora").innerHTML = " ";
    document.getElementById("apuestasArriesgadaEconomizadora").value = " ";
    document.getElementById("probabilidadArriesgadaEconomizadora").innerHTML = " ";
    document.getElementById("ultimoValorArriesgadaEconomizadora").innerHTML = " ";
    document.getElementById("ultimaCuotaArriesgadaEconomizadora").innerHTML = " ";
    document.getElementById("ultimoGanadoArriesgadaEconomizadora").innerHTML = " ";
    
    //Arriesgada Derrochador
    
    document.getElementById("saldoInicialArriesgadaDerrochadora").innerHTML = " ";
    document.getElementById("ultimoSaldoArriesgadaDerrochadora").innerHTML = " ";
    document.getElementById("apuestasArriesgadaDerrochadora").value = " ";
    document.getElementById("probabilidadArriesgadaDerrochadora").innerHTML = " ";
    document.getElementById("ultimoValorArriesgadaDerrochadora").innerHTML = " ";
    document.getElementById("ultimaCuotaArriesgadaDerrochadora").innerHTML = " ";
    document.getElementById("ultimoGanadoArriesgadaDerrochadora").innerHTML = " ";

    borrarArriesgadaDerrochadora();
    borrarArriesgadaEconomizadora();
    borrarConservadoraDerrochadora();
    borrarConservadoraEconomizadora();
}

var ctx = document.getElementById("myChart").getContext("2d");

var myChart = new Chart(ctx,{
type: "line",
data: {
    labels:[],
    datasets:[{
        label : "Saldo Apuestas", 
        data:[]
    }]
},
options: {
    responsive: false,
    maintainAspectRatio: false
}
});
    

function añadirDatos(){
    myChart.data.datasets[0].data.push(valorSaldoActual);
    myChart.data.labels.push(i);
    myChart.update();
}

function borrarDatos(){
    myChart.destroy();
    ctx = document.getElementById("myChart").getContext("2d");

    myChart = new Chart(ctx,{
        type: "line",
        data: {
        labels:[],
            datasets:[{
                label : "Saldo Apuestas", 
                data:[]
            }]
        },
        options: {
        responsive: false,
        maintainAspectRatio: false
        }
    });
}

function borrarConservadoraEconomizadora(){
    myChartConservadoraEconomizadora.destroy();
    ctxConservadoraEconomizadora = document.getElementById("chartConservadoraEconomizadora").getContext("2d");

    myChartConservadoraEconomizadora = new Chart(ctxConservadoraEconomizadora,{
        type: "line",
        data: {
            labels:[],
            datasets:[{
                label : "Saldo Apuestas", 
                data:[]
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false
        }
        });        
}

function borrarConservadoraDerrochadora(){
    myChartConservadoraDerrochadora.destroy();
    ctxConservadoraDerrochadora = document.getElementById("chartConservadoraDerrochadora").getContext("2d");

    myChartConservadoraDerrochadora = new Chart(ctxConservadoraDerrochadora,{
        type: "line",
        data: {
            labels:[],
            datasets:[{
                label : "Saldo Apuestas", 
                data:[]
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false
        }
        });
}

function borrarArriesgadaEconomizadora(){
    myChartArriesgadaEconomizadora.destroy();
    ctxArriesgadaEconomizadora = document.getElementById("chartArriesgadaEconomizadora").getContext("2d");

    myChartArriesgadaEconomizadora = new Chart(ctxArriesgadaEconomizadora,{
        type: "line",
        data: {
            labels:[],
            datasets:[{
                label : "Saldo Apuestas", 
                data:[]
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false
        }
        });
}

function borrarArriesgadaDerrochadora(){
    myChartArriesgadaDerrochadora.destroy();
    ctxArriesgadaDerrochadora = document.getElementById("chartArriesgadaDerrochadora").getContext("2d");

    myChartArriesgadaDerrochadora = new Chart(ctxArriesgadaDerrochadora,{
        type: "line",
        data: {
            labels:[],
            datasets:[{
                label : "Saldo Apuestas", 
                data:[]
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false
        }
        });
}

                                                                                            //Este sera el modo automatico


function ingresarSaldoInicialAutomatico(){
    saldoInicialAutomatico = document.getElementById("saldoInicialAutomatico").value;
    
    if(saldoInicialAutomatico == ""){
        window.alert("Por favor ingrese el saldo");
        return;
    }
    else
        secciones[3].className = "automatico oculto";
        secciones[4].className = "probabilidadGanar";
}

function conservadora(){
    secciones[4].className = "probabilidadGanar oculto";
    secciones[5].className = "conservadora";
}

function arriesgada(){
    secciones[4].className = "probabilidadGanar oculto";
    secciones[6].className = "arriesgada";
}




function economizadoraConservadora(){
    secciones[5].className = "conservadora oculto";
    secciones[7].className = "conservadora_economizadora";
    document.getElementById("saldoInicialConservadoraEconomizadora").innerHTML = saldoInicialAutomatico;
    document.getElementById("ultimoSaldoConservadoraEconomizadora").innerHTML = saldoInicialAutomatico;
    final = document.getElementById("ultimoSaldoConservadoraEconomizadora").textContent;
    añadirDatosConservadoraEconomizadora();
}

function derrochadoraConservadora(){
    secciones[5].className = "conservadora oculto";
    secciones[8].className = "conservadora_derrochadora";
    document.getElementById("saldoInicialConservadoraDerrochadora").innerHTML = saldoInicialAutomatico;
    document.getElementById("ultimoSaldoConservadoraDerrochadora").innerHTML = saldoInicialAutomatico;
    final = document.getElementById("ultimoSaldoConservadoraDerrochadora").textContent;
    añadirDatosConservadoraDerrochadora();
}

function economizadoraArriesgada(){
    secciones[6].className = "arriesgada oculto";
    secciones[9].className = "arriesgada_economizadora";
    document.getElementById("saldoInicialArriesgadaEconomizadora").innerHTML = saldoInicialAutomatico;
    document.getElementById("ultimoSaldoArriesgadaEconomizadora").innerHTML = saldoInicialAutomatico;
    final = document.getElementById("ultimoSaldoArriesgadaEconomizadora").textContent;
    añadirDatosArriesgadaEconomizadora();
}

function derrochadoraArriesgada(){
    secciones[6].className = "arriesgada oculto";
    secciones[10].className = "arriesgada_derrochadora";
    document.getElementById("saldoInicialArriesgadaDerrochadora").innerHTML = saldoInicialAutomatico;
    document.getElementById("ultimoSaldoArriesgadaDerrochadora").innerHTML = saldoInicialAutomatico;
    final = document.getElementById("ultimoSaldoArriesgadaDerrochadora").textContent;
    añadirDatosArriesgadaDerrochadora();
}





function apuestasEconomizadorConservadora(){
    apuestaEconomizadorConservadora = document.getElementById("apuestasConservadoraEconomizadora").value;
    numEconomizadorConservadora = parseInt(apuestaEconomizadorConservadora, 10);
}

function apuestasDerrochadoraConservadora(){
    apuestaDerrochadoraConservadora = document.getElementById("apuestasConservadoraDerrochadora").value;
    numDerrochadoraConservadora = parseInt(apuestaDerrochadoraConservadora, 10);
}

function apuestasEconomizadorArriesgada(){
    apuestaEconomizadorArriesgada = document.getElementById("apuestasArriesgadaEconomizadora").value;
    numEconomizadorArriesgada = parseInt(apuestaEconomizadorArriesgada, 10);
}

function apuestasDerrochadorArriesgada(){
    apuestaDerrochadorArriesgada = document.getElementById("apuestasArriesgadaDerrochadora").value;
    numDerrochadorArriesgada = parseInt(apuestaDerrochadorArriesgada, 10);
}


//Funciones que harán que todo funcione



                                                                                                                    //ECONOMIZADOR CONSERVADORA




function valorEconomizadorConservadora(){

        for(j=0; j<numEconomizadorConservadora; j++){

            //Probabilidad random
            randomEconomizadorConservadora = (Math.random()*(1 - (0.7))+(0.7)).toFixed(2);

            //Valor apostado random
            aleatorioEconomizadorConservadora = (Math.random()*(0.4 - (0))+(0)).toFixed(2);

            //Imprimir probabilidad random
            document.getElementById("probabilidadConservadoraEconomizadora").innerHTML = randomEconomizadorConservadora;

            //Imprimir valor apostado random
            document.getElementById("ultimoValorConservadoraEconomizadora").innerHTML = (aleatorioEconomizadorConservadora*final).toFixed(0);

            //Imprimir cuota
            document.getElementById("ultimaCuotaConservadoraEconomizadora").innerHTML = (1/randomEconomizadorConservadora).toFixed(2);

            //Leer valor apostado
            saldoUpdateAutomatico = document.getElementById("ultimoValorConservadoraEconomizadora").textContent;

            //Leer cuota apostada
            cuotaUpdateAutomatica = document.getElementById("ultimaCuotaConservadoraEconomizadora").textContent;

            //------

            //Imprimir último valor ganado

                compararEconomizadorConservadora = Math.random();
                if(compararEconomizadorConservadora<= randomEconomizadorConservadora){
                     document.getElementById("ultimoGanadoConservadoraEconomizadora").innerHTML = (saldoUpdateAutomatico*cuotaUpdateAutomatica).toFixed(0);
                     ultimoValorGanado=document.getElementById("ultimoGanadoConservadoraEconomizadora").textContent;

                    saldoFinal = document.getElementById("ultimoSaldoConservadoraEconomizadora").textContent;

                    intActual = parseInt(saldoFinal,10);
                    intGanado = parseInt(ultimoValorGanado, 10);
                    intApostado = parseInt(saldoUpdateAutomatico, 10);

                    document.getElementById("ultimoSaldoConservadoraEconomizadora").innerHTML = (intActual)-(intApostado)+(intGanado);

                    final = document.getElementById("ultimoSaldoConservadoraEconomizadora").textContent;
                    i++;
                    añadirDatosConservadoraEconomizadora();
                }
                if(compararEconomizadorConservadora> randomEconomizadorConservadora){
                    document.getElementById("ultimoGanadoConservadoraEconomizadora").innerHTML = 0;
                     ultimoValorGanado=document.getElementById("ultimoGanadoConservadoraEconomizadora").textContent;

                    saldoFinal = document.getElementById("ultimoSaldoConservadoraEconomizadora").textContent;

                    intActual = parseInt(saldoFinal,10);
                    intGanado = parseInt(ultimoValorGanado, 10);
                    intApostado = parseInt(saldoUpdateAutomatico, 10);

                    document.getElementById("ultimoSaldoConservadoraEconomizadora").innerHTML = intActual-intApostado+0;

                    final = document.getElementById("ultimoSaldoConservadoraEconomizadora").textContent;
                    i++;
                    añadirDatosConservadoraEconomizadora();

                }

    }
}


var ctxConservadoraEconomizadora = document.getElementById("chartConservadoraEconomizadora").getContext("2d");

var myChartConservadoraEconomizadora = new Chart(ctxConservadoraEconomizadora,{
type: "line",
data: {
    labels:[],
    datasets:[{
        label : "Saldo Apuestas", 
        data:[]
    }]
},
options: {
    responsive: false,
    maintainAspectRatio: false
}
});

function añadirDatosConservadoraEconomizadora(){
    myChartConservadoraEconomizadora.data.datasets[0].data.push(final);
    myChartConservadoraEconomizadora.data.labels.push(i);
    myChartConservadoraEconomizadora.update();
}






                                                                                                                //DERROCHAR CONSERVADORA








function valorDerrochadoraConservadora(){
    for(j=0; j<numDerrochadoraConservadora; j++){
        randomDerrochadoraConservadora = (Math.random()*(1 - (0.7))+(0.7)).toFixed(2);
        aleatorioDerrochadoraConservadora = (Math.random()*(1 - (0.7))+(0.7)).toFixed(2);
        
        //Imprimir probabilidad random
        document.getElementById("probabilidadConservadoraDerrochadora").innerHTML = randomDerrochadoraConservadora;
        
        //Imprimir valor apostado random
        document.getElementById("ultimoValorConservadoraDerrochadora").innerHTML = (aleatorioDerrochadoraConservadora*final).toFixed(0);
        
        //Imprimir cuota
        document.getElementById("ultimaCuotaConservadoraDerrochadora").innerHTML = (1/randomDerrochadoraConservadora).toFixed(2);
        
        //Leer valor apostado
        saldoUpdateAutomatico = document.getElementById("ultimoValorConservadoraDerrochadora").textContent;
        
        //Leer cuota apostada
        cuotaUpdateAutomatica = document.getElementById("ultimaCuotaConservadoraDerrochadora").textContent;
        
        //------
        
        //Imprimir último valor ganado
        compararDerrochadoraConservadora = Math.random();
        if(compararDerrochadoraConservadora<= randomDerrochadoraConservadora){
             document.getElementById("ultimoGanadoConservadoraDerrochadora").innerHTML = (saldoUpdateAutomatico*cuotaUpdateAutomatica).toFixed(0);
             ultimoValorGanado=document.getElementById("ultimoGanadoConservadoraDerrochadora").textContent;
         
            saldoFinal = document.getElementById("ultimoSaldoConservadoraDerrochadora").textContent;
        
            intActual = parseInt(saldoFinal,10);
            intGanado = parseInt(ultimoValorGanado, 10);
            intApostado = parseInt(saldoUpdateAutomatico, 10);
        
            document.getElementById("ultimoSaldoConservadoraDerrochadora").innerHTML = (intActual)-(intApostado)+(intGanado);
        
            final = document.getElementById("ultimoSaldoConservadoraDerrochadora").textContent;
            i++;
            añadirDatosConservadoraDerrochadora();
        }
        if(compararDerrochadoraConservadora> randomDerrochadoraConservadora){
            document.getElementById("ultimoGanadoConservadoraDerrochadora").innerHTML = 0;
             ultimoValorGanado=document.getElementById("ultimoGanadoConservadoraDerrochadora").textContent;
         
            saldoFinal = document.getElementById("ultimoSaldoConservadoraDerrochadora").textContent;
        
            intActual = parseInt(saldoFinal,10);
            intGanado = parseInt(ultimoValorGanado, 10);
            intApostado = parseInt(saldoUpdateAutomatico, 10);
        
            document.getElementById("ultimoSaldoConservadoraDerrochadora").innerHTML = intActual-intApostado+0;
        
            final = document.getElementById("ultimoSaldoConservadoraDerrochadora").textContent;
            i++;
            añadirDatosConservadoraDerrochadora();
        
        }
        
    }
}






var ctxConservadoraDerrochadora = document.getElementById("chartConservadoraDerrochadora").getContext("2d");

var myChartConservadoraDerrochadora = new Chart(ctxConservadoraDerrochadora,{
type: "line",
data: {
    labels:[],
    datasets:[{
        label : "Saldo Apuestas", 
        data:[]
    }]
},
options: {
    responsive: false,
    maintainAspectRatio: false
}
});

function añadirDatosConservadoraDerrochadora(){
    myChartConservadoraDerrochadora.data.datasets[0].data.push(final);
    myChartConservadoraDerrochadora.data.labels.push(i);
    myChartConservadoraDerrochadora.update();
}






                                                                                                        //ECONOMIZAR ARRIESGADO




function valorArriesgadaEconomizadora(){
    for(j=0; j<numEconomizadorArriesgada; j++){
        randomEconomizadorArriesgada = (Math.random()*(0.4 - (0))+(0)).toFixed(2);
        aleatorioEconomizadorArriesgada = (Math.random()*(0.4 - (0))+(0)).toFixed(2);
        
        //Imprimir probabilidad random
        document.getElementById("probabilidadArriesgadaEconomizadora").innerHTML = randomEconomizadorArriesgada;
        
        //Imprimir valor apostado random
        document.getElementById("ultimoValorArriesgadaEconomizadora").innerHTML = (aleatorioEconomizadorArriesgada*final).toFixed(0);
        
        //Imprimir cuota
        document.getElementById("ultimaCuotaArriesgadaEconomizadora").innerHTML = (1/randomEconomizadorArriesgada).toFixed(2);
        
        //Leer valor apostado
        saldoUpdateAutomatico = document.getElementById("ultimoValorArriesgadaEconomizadora").textContent;
        
        //Leer cuota apostada
        cuotaUpdateAutomatica = document.getElementById("ultimaCuotaArriesgadaEconomizadora").textContent;
        
        //------
        
        //Imprimir último valor ganado
        compararEconomizadorArriesgada = Math.random();
        if(compararEconomizadorArriesgada<= randomEconomizadorArriesgada){
             document.getElementById("ultimoGanadoArriesgadaEconomizadora").innerHTML = (saldoUpdateAutomatico*cuotaUpdateAutomatica).toFixed(0);
             ultimoValorGanado=document.getElementById("ultimoGanadoArriesgadaEconomizadora").textContent;
         
            saldoFinal = document.getElementById("ultimoSaldoArriesgadaEconomizadora").textContent;
        
            intActual = parseInt(saldoFinal,10);
            intGanado = parseInt(ultimoValorGanado, 10);
            intApostado = parseInt(saldoUpdateAutomatico, 10);
        
            document.getElementById("ultimoSaldoArriesgadaEconomizadora").innerHTML = intActual-intApostado+intGanado;
        
            final = document.getElementById("ultimoSaldoArriesgadaEconomizadora").textContent;
            i++;
            añadirDatosArriesgadaEconomizadora();
        }
        if(compararEconomizadorArriesgada> randomEconomizadorArriesgada){
             document.getElementById("ultimoGanadoArriesgadaEconomizadora").innerHTML = 0;
             ultimoValorGanado=document.getElementById("ultimoGanadoArriesgadaEconomizadora").textContent;
         
            saldoFinal = document.getElementById("ultimoSaldoArriesgadaEconomizadora").textContent;
        
            intActual = parseInt(saldoFinal,10);
            intGanado = parseInt(ultimoValorGanado, 10);
            intApostado = parseInt(saldoUpdateAutomatico, 10);
        
            document.getElementById("ultimoSaldoArriesgadaEconomizadora").innerHTML = intActual-intApostado+0;
        
            final = document.getElementById("ultimoSaldoArriesgadaEconomizadora").textContent;
            i++;
            añadirDatosArriesgadaEconomizadora();
        }
        
    }
}


var ctxArriesgadaEconomizadora = document.getElementById("chartArriesgadaEconomizadora").getContext("2d");

var myChartArriesgadaEconomizadora = new Chart(ctxArriesgadaEconomizadora,{
type: "line",
data: {
    labels:[],
    datasets:[{
        label : "Saldo Apuestas", 
        data:[]
    }]
},
options: {
    responsive: false,
    maintainAspectRatio: false
}
});

function añadirDatosArriesgadaEconomizadora(){
    myChartArriesgadaEconomizadora.data.datasets[0].data.push(final);
    myChartArriesgadaEconomizadora.data.labels.push(i);
    myChartArriesgadaEconomizadora.update();
}










                                                                                                                    // ARRIESGADO DERROCHADOR






function valorArriesgadaDerrochadora(){
    for(j=0; j<numDerrochadorArriesgada; j++){
        randomDerrochadorArriesgada = (Math.random()*(0.4 - (0))+(0)).toFixed(2);
        aleatorioDerrochadorArriesgada = (Math.random()*(1 - (0.7))+(0.7)).toFixed(2);
        
         //Imprimir probabilidad random
        document.getElementById("probabilidadArriesgadaDerrochadora").innerHTML = randomDerrochadorArriesgada;
        
        //Imprimir valor apostado random
        document.getElementById("ultimoValorArriesgadaDerrochadora").innerHTML = (aleatorioDerrochadorArriesgada*final).toFixed(0);
        
        //Imprimir cuota
        document.getElementById("ultimaCuotaArriesgadaDerrochadora").innerHTML = (1/randomDerrochadorArriesgada).toFixed(2);
        
        //Leer valor apostado
        saldoUpdateAutomatico = document.getElementById("ultimoValorArriesgadaDerrochadora").textContent;
        
        //Leer cuota apostada
        cuotaUpdateAutomatica = document.getElementById("ultimaCuotaArriesgadaDerrochadora").textContent;
        
        //------
        
        //Imprimir último valor ganado
        compararDerrochadorArriesgada = Math.random();
        if(compararDerrochadorArriesgada<= randomDerrochadorArriesgada){
             document.getElementById("ultimoGanadoArriesgadaDerrochadora").innerHTML = (saldoUpdateAutomatico*cuotaUpdateAutomatica).toFixed(0);
             ultimoValorGanado=document.getElementById("ultimoGanadoArriesgadaDerrochadora").textContent;
         
            saldoFinal = document.getElementById("ultimoSaldoArriesgadaDerrochadora").textContent;
        
            intActual = parseInt(saldoFinal,10);
            intGanado = parseInt(ultimoValorGanado, 10);
            intApostado = parseInt(saldoUpdateAutomatico, 10);
        
            document.getElementById("ultimoSaldoArriesgadaDerrochadora").innerHTML = intActual-intApostado+intGanado;
        
            final = document.getElementById("ultimoSaldoArriesgadaDerrochadora").textContent;
            i++;
            añadirDatosArriesgadaDerrochadora();
        }
        if(compararDerrochadorArriesgada> randomDerrochadorArriesgada){
            document.getElementById("ultimoGanadoArriesgadaDerrochadora").innerHTML = 0;
            ultimoValorGanado=document.getElementById("ultimoGanadoArriesgadaDerrochadora").textContent;
        
           saldoFinal = document.getElementById("ultimoSaldoArriesgadaDerrochadora").textContent;
       
           intActual = parseInt(saldoFinal,10);
           intGanado = parseInt(ultimoValorGanado, 10);
           intApostado = parseInt(saldoUpdateAutomatico, 10);
       
           document.getElementById("ultimoSaldoArriesgadaDerrochadora").innerHTML = intActual-intApostado+0;
       
           final = document.getElementById("ultimoSaldoArriesgadaDerrochadora").textContent;
           i++;
           añadirDatosArriesgadaDerrochadora();
       }
    }
}

var ctxArriesgadaDerrochadora = document.getElementById("chartArriesgadaDerrochadora").getContext("2d");

var myChartArriesgadaDerrochadora = new Chart(ctxArriesgadaDerrochadora,{
type: "line",
data: {
    labels:[],
    datasets:[{
        label : "Saldo Apuestas", 
        data:[]
    }]
},
options: {
    responsive: false,
    maintainAspectRatio: false
}
});

function añadirDatosArriesgadaDerrochadora(){
    myChartArriesgadaDerrochadora.data.datasets[0].data.push(final);
    myChartArriesgadaDerrochadora.data.labels.push(i);
    myChartArriesgadaDerrochadora.update();
}
