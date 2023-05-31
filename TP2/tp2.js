//1. La variable definida abajo almacena un numero entero entre 1 y 100 de forma aleatoria, es decir que cada vez que se
//vuelva a ejectuar el codigo obtendrá un número nuevo aleatorio.
const numeroRandom = Math.floor((Math.random() * (100 - 1 + 1)) + 1);

//-usar esta variable para determinar si el número es par o impar (Un número es par si el resto de la división sobre 2 
//es igual a 0). Para calcular el resto usar: **resto = dividendo % 2**.
const resto = numeroRandom % 2

if (resto > 0) {
    console.log("El numero ", numeroRandom, " es impar")
} else{
    console.log("El numero ", numeroRandom, " es par")
}


