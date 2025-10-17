import {input,close} from "../../lib/nodeImperativo.js"

export class Calculadora{

    async suma (){
        console.log("Suma")
        const num1 = parseFloat(await input("Numero uno: "));
        const num2 = parseFloat(await input("Numero dos: "));
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
    }

    async resta (){
        console.log("Resta")
        const num1 = parseFloat(await input("Numero uno: "));
        const num2 = parseFloat(await input("Numero dos: "));
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
    }

    async mult (){
        console.log("Multiplicar")
        const num1 = parseFloat(await input("Numero uno: "));
        const num2 = parseFloat(await input("Numero dos: "));
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
    }

    async div (){
        console.log("Dividir")
        const num1 = parseFloat(await input("Numero uno: "));
        const num2 = parseFloat(await input("Numero dos: "));
        console.log(`${num1} / ${num2} = ${num1 / num2}`);
    }

}
