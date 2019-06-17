const fs =require('fs');
listaCursos=[];
inscritos=[];

const crear =(id,nombre,descripcion,valor,modalidad,duracion)=>{
    listar()
    let cur={
        id:id,
        nombre:nombre,
        descripcion:descripcion,
        valor:valor,
        estado:"Disponible",
        modalidad:modalidad,
        duracion:duracion
    };
    let duplicado =listaCursos.find(curso => curso.id== id)
    if(!duplicado){
        listaCursos.push(cur)
        guardar();
        console.log('Curso Registrado')
        return true
    }else{
        console.log('El curso con el id ya esta registrado')
        return false
    }
    
    
}

const listar=()=>{
    try{
    listaCursos=require('../cursos.json')
    }catch(error){
        listaCursos=[]
    }
    
}

const guardar=()=>{
    let datos = JSON.stringify(listaCursos);
    fs.writeFile('cursos.json',datos,(err)=>{
        if (err) throw (err);
        console.log('archivo creado con exito')
    })
}



const cerrar=(id)=>{
    listar()
    let curso =listaCursos.find(buscar => buscar.id== id)
    if(!curso){
        console.log('no existe ese estudiante')
    }else{
        if(curso.estado=="Disponible"){
            curso.estado="Cerrado"
        }else{
            curso.estado="Disponible"
        }
        guardar()
    }
}

const eliminar =(id)=>{
    listar()
    let cursos =listaCursos.filter(buscar=> buscar.id !=id);
    if(cursos.length==0){
        console.log('ningun estudiante tiene el nombre indicado')
    }else{
        listaCursos=cursos
        guardar()
    }
}

const Disponibles=()=>{
    listar()
    
    let cursos=listaCursos.filter(buscar=>buscar.estado == "Disponible")
    console.log(cursos)
    return cursos
}

const inscritosCurso=(id)=>{
   listarIncritos();
    let listado=inscritos.filter(buscar=>buscar.curso == id)
    
    return listado
}

const listarIncritos=()=>{
    try{
        inscritos=require('../inscritos.json')
        }catch(error){
            inscritos=[]
        } 
}

const inscribir=(id,cedula,nom,correo,tel)=>{
    listarIncritos();    
    let nuevo={
        curso:id,
        cedula:cedula,
        nombre:nom,
        correo:correo,
        telefono:tel
    }

    let duplicado=inscritos.find(buscar=>(buscar.cedula==cedula && buscar.curso==id))
    
    if(!duplicado){
        inscritos.push(nuevo)
        console.log('Estudiante Registrado')
        guardarCurso();
        return true
    }else{
        console.log('el estudiante Ya esta registrado en el curso')
        return false
    }
}

const guardarCurso=()=>{
    let datos = JSON.stringify(inscritos);
    fs.writeFile('inscritos.json',datos,(err)=>{
        if (err) throw (err);
        console.log('archivo creado con exito')
    })
}

const buscar=(id)=>{
    listar()
    let duplicado =listaCursos.find(curso => curso.id== id)
    if(duplicado){
        console.log('Curso encontrado')
        return duplicado
    }else{
        console.log('El curso no existe')
        
    }
}

const eliminarAlumno=(id,cedula)=>{
    listarIncritos()

    let nuevo=inscritos.filter(buscar=>!(buscar.curso==id && buscar.cedula==cedula))

    inscritos=nuevo
    guardarCurso()
    listarIncritos()
    console.log(inscritos)
}

module.exports ={ 
    crear,
    Disponibles,
    listar,
    eliminar,
    inscritosCurso,
    inscribir,
    buscar,
    cerrar,
    eliminarAlumno

}
