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
        texto=texto + " <tr><td> "+element.id+"</td><td>"+ element.nombre 
        + "</td><td> "+ element.descripcion
        +'</td><td> '+ element.valor+'</td>'+'<td><form action="/curso" method="get">\
        <button name="id" value='+element.id+'>Ver</button>\
    </form></td>'
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

    listarCursos.forEach(element => {
        texto=texto + " <tr><td> "+element.id+"</td><td>"+ element.nombre 
        + "</td><td> "+ element.descripcion
        +'</td><td> '+ element.valor+'</td>'+'<td><form action="/interesado" method="get">\
        <button name="id" value='+element.id+'>Ver</button>\
    </form></td>'
        '</tr>'

    });
    return texto+'</tdbody></table>'
})
hbs.registerHelper('InfoCurso',(id)=>{
    
    let inscritos=cursos.inscritosCurso(id)
    let curso=cursos.buscar(id)

    let texto='<h2>'+curso.nombre+'</h2>\
    <p><strong>codigo: </strong>'+curso.id+'\
    <br><strong>Descripcion: </strong>'+curso.descripcion+'\
    <br><strong>Modalidad: </strong>'+curso.modalidad+'\
    <br><strong>Estado: </strong>'+curso.estado+'\
    <br><strong>Duracion: </strong>'+curso.duracion+'\
    <br><strong>Valor: </strong>'+curso.valor+'</p>\
    <h2>Lista de Alumnos</h2>\
    <table><thead>\
    <th>cedula</th>\
    <th>Nombre</th>\
    <th>Correo</th>\
    <th>telefono</th>\
    </thead><tbody>'

    inscritos.forEach(element => {
        texto=texto + " <tr><td> "+element.cedula+"</td><td>"+ element.nombre 
        + "</td><td> "+ element.correo
        +'</td><td> '+ element.telefono+'<td><form action="/eliminar" method="post">\
        <input type="hidden" name="id" value='+id+' ></input><button name="cedula" value='+element.cedula+'>Eliminar</button>\
        </form></td>\
        </tr>'

    });

    texto+'</tdbody></table>\
    '
    return texto
})

hbs.registerHelper('verCurso',(id)=>{
    let curso=cursos.buscar(id)
  
        
    
    let texto='<h2>'+curso.nombre+'</h2>\
    <p><strong>codigo: </strong>'+curso.id+'\
    <br><strong>Descripcion: </strong>'+curso.descripcion+'\
    <br><strong>Modalidad: </strong>'+curso.modalidad+'\
    <br><strong>Estado: </strong>'+curso.estado+'\
    <br><strong>Duracion: </strong>'+curso.duracion+'\
    <br><strong>Valor: </strong>'+curso.valor+'</p>'
    return texto


})