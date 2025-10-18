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
        case "2": await tarea.buscarTareas(tareasArray); break;

        case "3": 
            const newTarea = await tarea.nuevaTarea(tareasArray.length); 
            tareasArray.push(newTarea)
        break;

        case "4":await tarea.mostrarTareas(); break;
       }
       

    }while(op!="0")
}
Main()