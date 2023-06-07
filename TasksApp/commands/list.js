const data = require("../taskData");
const readlineSync = require("readline-sync");

let listed = [];

if (process.argv[2] === "list") {
   const listTitle = readlineSync.question("¿Quiere ver los titulos?")

   const callList = () => {
    if (listTitle == "Yes") {
      for (i = 0; i < data.length; i++) {
        listed.push(data[i].title);
      }
      return listListed = listed;
    } 
    if (listTitle == "No") {
      return false;
    }
    if (listTitle == "") {
      return "noFormat";
    }
  }
  module.exports = callList;
}





//let switchList = putTitle; // Le asígno a "switchList" el mismo valor que el input de "putTitle" para usarlo como parametro
// en el switch
//switch (switchList) { // Creo un switch con parámetro la variable anterior para tomar la respuesta del usuario
//case "Yes": // Caso "Y"
//if (switchList == "Y")
//for (i = 0; i < data.length; i++) { // En caso de responder "Y" se ejecuta un búcle, siendo i = 0, en referencia
// a la posición del array de mi lista de tareas
//let titles = data[i]; // Le asigno a "titles" el titulo del array en la posición actual de "i"
//list.push(titles.title); // Agrega el título de cada objeto a mi array "list" cada vez que se ejecuta el búcle
//}
//console.log(`Titulos: ${list}`); // Se ejecuta el console.log para mostrar la lista de títulos
//
//case "No": // Caso "N"
//if (switchList == "N")
//console.log("No se mostrarán los titulos"); // Se ejecuta un console.log con un mensaje en caso de responde "No"
//
//}
