import { input } from "../../lib/nodeImperativo.js";

export class Tarea{
    
    #Id;
    #Titulo;
    #Descripcion;
    #Estado;
    #Dificultad;
    #FechaCreacion;
    #FechaVencimiento;

    constructor(Id,Titulo,Descripcion,Estado,Dificultad,FechaCreacion,FechaVencimiento){
        this.#Id = Id;
        this.#Titulo = Titulo;
        this.#Descripcion = Descripcion;
        this.#Estado = Estado
        this.#Dificultad = Dificultad;
        this.#FechaCreacion = FechaCreacion;
        this.#FechaVencimiento = FechaVencimiento;
    }

    get Id(){ return this.#Id}
    get Titulo(){ return this.#Titulo}
    get Descripcion(){ return this.#Descripcion}
    get Estado(){return this.#Estado}
    get Dificultad(){ return this.#Dificultad}
    get FechaCreacion(){ return this.#FechaCreacion}
    get FechaVencimiento(){ return this.#FechaVencimiento}


    set Id(v){ this.#Id = v}
    set Titulo(v){ this.#Titulo = v}
    set Descripcion(v){ this.#Descripcion = v}
    set Estado(v){this.#Estado}
    set Dificultad(v){ this.#Dificultad = v}
    set FechaCreacion(v){ this.#FechaCreacion = v}
    set FechaVencimiento(v){ this.#FechaVencimiento = v}

    async nuevaTarea(id){
        let op
        const tarea = new Tarea
        tarea.Id = id
        tarea.Titulo = await input("Titulo: ")
        tarea.Descripcion = await input("Descripcion: ")
        
        op = await input("[1]Pendiente [2]En Proceso [3]Terminado [4]Cancelado: ")
        if(op == "1") tarea.Estado = "Pendiente"
        if(op == "2") tarea.Estado = "En Proceso"
        if(op == "3") tarea.Estado = "Terminado"
        if(op == "4") tarea.Estado = "Cancelado"

        op = await input("Dificultad [1]Facil [2]Normal [3]Dificil")
        if(op == "1")tarea.Dificultad = "Facil"
        if(op == "1")tarea.Dificultad = "Normal"
        if(op == "1")tarea.Dificultad = "Dificil"

        tarea.Dificultad = await input("Dificultad: ")
        tarea.FechaCreacion = "Hoy"
        tarea.FechaVencimiento = await input("Vencimineto: ")

        return tarea
    }


    async mostrarTareas(tareas){
        tareas.forEach(t => {
            
            console.log(`ID: [${t.Id}] `)
            console.log(`Titulo: [${t.Titulo}]`)
            console.log(`Descripcion: [${t.Descripcion}]`)
            console.log(`Dificultad: [${t.Dificultad}]`)
            console.log(`Fecha de Creacion: [${t.FechaCreacion}]`)
            console.log(`Vencimiento: [${t.FechaVencimiento}]`)
            console.log("-----------------")
        });
    }

    async buscarTareas(tareas,num){
        let op
        console.log("Buscar tarea por [1].ID [2].Dificultad [3].Estado")
        op = await input("> ")
        if(op == "1"){
            op  = await input(">Ingrese el ID: ")
            tareas.forEach(t => {
                if(t.id === op){
                    console.log(`ID: [${t.Id}] `)
                    console.log(`Titulo: [${t.Titulo}]`)
                }
            });
        }

        if(op == "2"){
            op = await input("Dificultad [1]Facil [2]Normal [3]Dificil")
            tareas.forEach(t => {
                if(op === "1" && t.Dificultad == "Facil"){ console.log(`ID: [${t.Id}] `); console.log(`Titulo: [${t.Titulo}]`)}
                if(op === "2" && t.Dificultad == "Normal"){console.log(`ID: [${t.Id}] `); console.log(`Titulo: [${t.Titulo}]`)}
                if(op === "3" && t.Dificultad == "Dificil"){console.log(`ID: [${t.Id}] `); console.log(`Titulo: [${t.Titulo}]`)}
            });
        }

        if(op == "3"){
            op = await input("Estado [1]Pendiente [2]En Proceso [3]Terminado [4]Cancelado")
                tareas.forEach(t => {
                    if(op === "1" && t.Dificultad == "Pendiente"){ console.log(`ID: [${t.Id}] `); console.log(`Titulo: [${t.Titulo}]`)}
                    if(op === "2" && t.Dificultad == "En Proceso"){console.log(`ID: [${t.Id}] `); console.log(`Titulo: [${t.Titulo}]`)}
                    if(op === "3" && t.Dificultad == "Terminado"){console.log(`ID: [${t.Id}] `); console.log(`Titulo: [${t.Titulo}]`)}
                    if(op === "4" && t.Dificultad == "Cancelado"){console.log(`ID: [${t.Id}] `); console.log(`Titulo: [${t.Titulo}]`)}
                });
        }
    }
}