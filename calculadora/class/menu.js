import {input,close} from "../../lib/nodeImperativo.js"

export class Menu{

   async mostrarMenu(){
        let op
        do {

        console.log("-- Calculadora --")
        console.log("[1]-Sumar")
        console.log("[2]-Restar")
        console.log("[3]-Multiplicar")
        console.log("[4]-Dividir")
        console.log("[0]-Salir")
        op = await input("> ")

        if(["1","2","3","4"].includes(op)) return op
        if(op == "0") {
            console.log("Programa cerrado")
            process.exit(0);
        }

    } while (op != "0");
    }
}
