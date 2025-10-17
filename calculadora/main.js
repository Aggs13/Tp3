

import {Menu} from "./class/menu.js"
import {Calculadora} from "./class/calculadora.js"

async function main() {
    const menu = new Menu();
    const calculadora = new Calculadora() 
    let opcion
    do{
        
        opcion = await menu.mostrarMenu()
        switch(opcion){
            case "1":  await calculadora.suma(); break;
            case "2": await calculadora.resta(); break;
            case "3": await calculadora.mult(); break;
            case "4": await calculadora.div(); break;
        }
        
    }while(opcion != "0")
}

main();
