import { Menu } from "./class/menu.js";
import {Tarea} from "./class/Tarea.js"

async function Main() {
    const menu = new Menu()
    const tarea = new Tarea();
    let tareasArray = []

    let op
    do{
       op = await menu.mostrarMenu()
       switch(op){
        case "1": tarea.mostrarTareas(tareasArray); break;
        case "2": break;

        case "3": 
            const newTarea = await tarea.nuevaTarea(); 
            tareasArray.push(newTarea)
        break;
       }
       

    }while(op!="0")
}
Main()