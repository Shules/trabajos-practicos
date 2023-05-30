const sumar = require('./sumar.js');
const restar = require('./restar.js')
const multiplicar = require('./multiplicar.js')
const dividir = require('./dividir.js')

let resultadoSumar = sumar(1,2)
let resultadoRestar = restar(1,2)
let resultadoMultiplicar = multiplicar(1,0)
let resultadoDividir = dividir(1,0)

console.log("El resultado de la suma es: ", resultadoSumar)
console.log("El resultado de la resta es: ", resultadoRestar)
console.log("El resultado de la multiplicar es: ", resultadoMultiplicar)

if (resultadoDividir === Infinity) {
    console.log("No se puede dividir por 0")
} else {
    console.log("El resultado de la división es: ", resultadoDividir)
}
