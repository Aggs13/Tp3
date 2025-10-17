import {input} from "../../lib/nodeImperativo.js"



export class Menu{

    async mostrarMenu(){
        let op
        do{
            console.log("[1]-Ver Tareas")
            console.log("[2]-Buscar")
            console.log("[3]-Agregrar")
            console.log("[0]-Salir")

            op = await input("> ")

            if(["1","2","3"].includes(op)) return op
            if(op == "0") {
                console.log("Programa cerrado")
                process.exit(0);
            }
        }while(op != "0")
    }
}