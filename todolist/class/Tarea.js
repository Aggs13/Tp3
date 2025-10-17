import { input } from "../../lib/nodeImperativo.js";

export class Tarea{
    
    #Id;
    #Titulo;
    #Descripcion;
    #Dificultad;
    #FechaCreacion;
    #FechaVencimiento;

    constructor(Id,Titulo,Descripcion,Dificultad,FechaCreacion,FechaVencimiento){
        this.#Id = Id;
        this.#Titulo = Titulo;
        this.#Descripcion = Descripcion;
        this.#Dificultad = Dificultad;
        this.#FechaCreacion = FechaCreacion;
        this.#FechaVencimiento = FechaVencimiento;
    }

    get Id(){ return this.#Id}
    get Titulo(){ return this.#Titulo}
    get Descripcion(){ return this.#Descripcion}
    get Dificultad(){ return this.#Dificultad}
    get FechaCreacion(){ return this.#FechaCreacion}
    get FechaVencimiento(){ return this.#FechaVencimiento}


    set Id(v){ this.#Id = v}
    set Titulo(v){ this.#Titulo = v}
    set Descripcion(v){ this.#Descripcion = v}
    set Dificultad(v){ this.#Dificultad = v}
    set FechaCreacion(v){ this.#FechaCreacion = v}
    set FechaVencimiento(v){ this.#FechaVencimiento = v}

    async nuevaTarea(){
        const tarea = new Tarea
        tarea.Titulo = await input("Titulo: ")
        tarea.Descripcion = await input("Descripcion: ")
        tarea.Dificultad = await input("Dificultad: ")
        tarea.FechaCreacion = "Hoy"
        tarea.FechaVencimiento = await input("Vencimineto: ")

        return tarea
    }


    async mostrarTareas(tareas){
        tareas.forEach(t => {
            console.log(t.Titulo)
            console.log(t.Descripcion)
            console.log(t.Dificultad)
            console.log(t.FechaCreacion)
            console.log(t.FechaVencimiento)
        });
    }
}