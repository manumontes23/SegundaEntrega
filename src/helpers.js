const hbs=require('hbs');
const cursos=require('./cursos.js')

hbs.registerHelper('listarCursos',()=>{
    listaCursos=require('../cursos.json')
    let texto='<table>\<thead>\
    <th>Nombre</th>\
    <th>Descripcion</th>\
    <th>Valor</th>\
    </thead><tbody>'

    listaCursos.forEach(element => {
        texto=texto + " <tr onclick=><td> "+ element.nombre 
        + "</td><td> "+ element.descripcion
        +'</td><td> '+ element.valor+
        '</tr>'

    });
    return texto+'</tdbody></table>'
})

hbs.registerHelper('listarCursosdisponibles',()=>{
    
    listarCursos=cursos.Disponibles()

    let texto='<table>\<thead>\
    <th>id</th>\
    <th>Nombre</th>\
    <th>Descripcion</th>\
    <th>Valor</th>\
    </thead><tbody>'

    listaCursos.forEach(element => {
        texto=texto + " <tr><td> "+element.id+"</td><td>"+ element.nombre 
        + "</td><td> "+ element.descripcion
        +'</td><td> '+ element.valor+
        '</tr>'

    });
    return texto+'</tdbody></table>'
})
hbs.registerHelper('InfoCurso',(id)=>{
    let inscritos=cursos.inscritosCurso(id)
    let curso=cursos.buscar(id)

    let texto='<h2>'+curso.nombre+'</h2>\
    <p><em>codigo: </em>'+curso.id+'\
    <em>Descripcion: </em>'+curso.descripcion+'\
    <em>Modalidad: </em>'+curso.modalidad+'\
    <em>Estado: </em>'+curso.estadodo+'\
    <em>Duracion: </em>'+curso.duracion+'\
    <em>Valor: </em>'+curso.valor+'</p>\
    <table><thead>\
    <th>cedula</th>\
    <th>Nombre</th>\
    <th>Correo</th>\
    <th>telefono</th>\
    </thead><tbody>'

    inscritos.forEach(element => {
        texto=texto + " <tr><td> "+element.cedula+"</td><td>"+ element.nombre 
        + "</td><td> "+ element.correo
        +'</td><td> '+ element.telefono+
        '</tr>'

    });
    return texto+'</tdbody></table>'
})