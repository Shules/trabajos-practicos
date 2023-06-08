const readlineSync = require("readline-sync")

//1.  Escribir un programa que pida al usuario una palabra y la muestre por pantalla 10 veces.


if (process.argv[2] === "Repetir") {
   const userWord = readlineSync.question("Ingrese una palabra: ")
     for (let i = 0; i < 10; i++) {
        console.log(`Su palabra es: ${userWord}`)
     } 

}


// 2.  Escribir un programa que pregunte al usuario su edad y muestre por pantalla todos los años que
// ha cumplido (desde 1 hasta su edad).

let ageList = []
if (process.argv[2] === "Edad") {
    const userAge = readlineSync.question("Ingrese su edad: ")
     for (let i = 0; i <= userAge; i++) {
        ageList.push(i)      
     } 
     console.log(`Años cumplidos: ${ageList}`)
}

//3.  Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla todos los números 
// impares desde 1 hasta ese número separados por comas.

let oddNumber = []
if (process.argv[2] === "Numero") {
  const enterNumber = readlineSync.question("Ingrese un número entero positivo: ")
  const integerNumber = Number.isInteger(parseFloat(enterNumber))
  const evenOrOdd = (number) => {
    number = enterNumber
    if (number > 0) {
      for (let i = 1; i <= number; i++) {
        if (i % 2 == 1) {
          oddNumber.push(i)
        }
      } return true;
    }
    
  }

  let resultevenOrOdd = evenOrOdd()

  if (integerNumber == false) {
    console.log("El número no es un entero")
  } else if (enterNumber <= 0) {
    console.log("El número no es positivo")
  } else if (resultevenOrOdd == true) {
    console.log(`Los números impares hasta el ${enterNumber} son: ${oddNumber}`)
  }
}

//4.  Escribir un programa que pida al usuario un número entero y muestre por pantalla un triángulo rectángulo 
// como el de más abajo, de altura el número introducido.
let pyramidConstructed = []
if (process.argv[2] === "Piramide") {
    const pyramid = readlineSync.question("Ingrese un número entero: ")
    
     for (i = 0; i < pyramid; i++) {
       pyramidConstructed.push("*")
       console.log(`${pyramidConstructed.join("")}`)
    } 
} 

//5. Escribir un programa que pida al usuario una palabra y luego muestre por pantalla una a una las letras de la palabra 
// introducida empezando por la última.

if (process.argv[2] == "Separar") {
  const palabra = readlineSync.question("Introduce una palabra: ");
  for (i = palabra.length - 1; i >= 0; i--) {
    console.log(palabra[i]);
  }
}
