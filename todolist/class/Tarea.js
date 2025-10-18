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
    set Estado(v){this.#Estado = v}
    set Dificultad(v){ this.#Dificultad = v}
    set FechaCreacion(v){ this.#FechaCreacion = v}
    set FechaVencimiento(v){ this.#FechaVencimiento = v}

    async nuevaTarea(id){
        console.clear()
        let op
        const tarea = new Tarea
        tarea.Id = id
        tarea.Titulo = await input("Titulo: ")
        tarea.Descripcion = await input("Descripcion: ")
    
        const estados = ["Pendiente", "En Proceso", "Terminado", "Cancelado"]
        op = await input("Estado: [1]Pendiente [2]En Proceso [3]Terminado [4]Cancelado: ")
        tarea.Estado = estados[parseInt(op) - 1] || "Pendiente"

        const dificultades = ["Facil", "Normal", "Dificil"]
        op = await input("Dificultad: [1]Facil [2]Normal [3]Dificil: ")
        tarea.Dificultad = dificultades[parseInt(op) - 1] || "Normal"

        tarea.FechaCreacion = "Hoy"
        tarea.FechaVencimiento = await input("Vencimineto: ")

        return tarea
    }


    async mostrarTareas(tareas){
        console.clear()
        tareas.forEach(t => {
            console.log("-----------------")
            console.log(`ID: [${t.Id}] || Titulo: ${t.Titulo}`)
            console.log(`Descripcion: ${t.Descripcion}`)
            console.log(`Estado: ${t.Estado} || Dificultad: ${t.Dificultad}`)
            console.log(`Creacion: ${t.FechaCreacion} || Vencimiento: ${t.FechaVencimiento}`)
            console.log("-----------------")
        });
    }

    async buscarTareas(tareas,num){
        console.clear()
        let op
        console.log("Buscar tarea por [1].ID [2].Dificultad [3].Estado")
        op = await input("> ")

        // busqueda por ID
        if(op == "1"){
            const id  = await input(">Ingrese el ID: ")
            console.log("---------------")
            tareas.filter(t => t.Id === parseInt(id)).forEach(t => console.log(`ID [${t.Id}] |Titulo: ${t.Titulo}`));
        }

        // buscqueda por Dificultad
        if(op == "2"){
            const dificultades = ["Facil", "Normal", "Dificil"]
            op = await input("Dificultad [1]Facil [2]Normal [3]Dificil")
            const dificultad = dificultades[parseInt(op)- 1]
            console.log("---------------")
            tareas.filter(t => t.Dificultad === dificultad).forEach(t => console.log(`ID [${t.Id}] |Titulo: ${t.Titulo}`))
        }

        // busqueda por estado
        if(op == "3"){
            const estados = ["Pendiente", "En Proceso", "Terminado", "Cancelado"]
            op = await input("Estado [1]Pendiente [2]En Proceso [3]Terminado [4]Cancelado")
            const estado = estados[parseInt(op)-1]
            console.log("---------------")
            tareas.filter(t => t.Estado === estado).forEach(t => console.log(`ID [${t.Id}] |Titulo: ${t.Titulo}`));
        }
    }
}