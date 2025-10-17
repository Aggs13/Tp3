import {input,close} from "../../lib/nodeImperativo.js"

export class Calculadora{

    async operar (operacion,simbolo){
        console.clear(); 
        console.log("Operacion: "+ simbolo)
        const num1 = parseFloat(await input("Numero uno: "));
        const num2 = parseFloat(await input("Numero dos: "));
        console.log(`${num1} ${simbolo} ${num2} = ${operacion(num1,num2)}`)
    }
    async suma (){ await this.operar((num1,num2) => num1+num2, "+")}
    async resta (){ await this.operar((num1,num2) => num1-num2, "-")}
    async mult (){ await this.operar((num1,num2) => num1*num2, "*")}
    async div (){ await this.operar((num1,num2) => num1/num2, "/")}

}