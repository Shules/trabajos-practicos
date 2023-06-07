const readlineSync = require("readline-sync")
const fList = require("./commands/list");
const fFind = require("./commands/find");
const fFilter = require("./commands/filter");
const edit = require("./commands/edit");
const fReturn = require("./commands/return");


switch (process.argv[2]) {
  case "list":
    let showTitlesValue = fList();
    if (showTitlesValue === false) {
      console.log("No se mostraran los títulos");
    } else if (showTitlesValue === "noFormat") {
      console.log("Formato invalido");
    } else if (showTitlesValue === listListed) {
      console.log(`Los titulos son: ${showTitlesValue}`);
    }
    break;
  case "find":
    let founded = fFind();

    if (founded === true) {
      console.log(`El titulo fue encontrado`);
    } else {
      console.log(`Su titulo no fué encontrado`);
    }
    break;
  case "filter":
    let filter = fFilter();

    if (filter.length === 0) {
      console.log("Ningun titule coincide");
    } else if (filter == false) {
      console.log("Ningun titulo coincide");
    } else {
      console.log(`Los siguientes titulos coinciden: ${filter}`);
    }
    break;
  case "fReturn":
    let returnDesc = fReturn();

    if (returnDesc.length === 0) {
      console.log("Ningun titule coincide");
    } else {
      console.log(`Los siguientes titulos coinciden: ${returnDesc}`);
    }
    break;
  default:
    return console.log("No existe tal función");
}





