const operaciones = require("./operacionesMat")

let resultadoSumar = operaciones.sumar(1,2)
let resultadoRestar = operaciones.restar(1,2)
let resultadoMultiplicar = operaciones.multiplicar(1,0)
let resultadoDividir = operaciones.dividir(0,10)

console.log("El resultado de la suma es: ", resultadoSumar)
console.log("El resultado de la resta es: ", resultadoRestar)
console.log("El resultado de la multiplicar es: ", resultadoMultiplicar)

if (resultadoDividir === Infinity) {
    console.log("No se puede dividir por 0")
} else {
    console.log("El resultado de la división es: ", resultadoDividir)
}
