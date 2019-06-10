const hbs=require('hbs');

hbs.registerHelper('obtenerPromedio',(nota1,nota2,nota3)=>{
    return (nota1+nota2+nota3)/3
})

hbs.registerHelper('listar',()=>{
    listaEstudiantes=require('./listado.json')
    let texto='<table>\<thead>\
    <th>nombre</th>\
    <th>Matematicas</th>\
    <th>Ingles</th>\
    <th>Programacion</th></thead><tbody>'

    listaEstudiantes.forEach(element => {
        texto=texto + " <tr><td> "+ element.nombre 
        + "</td><td> "+ element.matematicas
        +'</td><td> '+ element.ingles+
        '</td><td> '+ element.programacion
        +'</td></tr>'

    });
    return texto+'</tdbody></table>'
})