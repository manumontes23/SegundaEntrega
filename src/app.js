const express= require('express');
const app =express();
const path =require('path');
const hbs= require('hbs');
const bodyParser=require('body-parser')

const cursos= require('./cursos')

require('./helpers');


const directoriopublico = path.join(__dirname,'../public');
const directoriopartials=path.join(__dirname,'../partials')
app.use(express.static(directoriopublico));

hbs.registerPartials(directoriopartials)
app.use(bodyParser.urlencoded({extended:false}))

app.set('view engine','hbs');

app.get('/',(req,res)=>{
    res.render('index');
});

app.post('/calculos',(req,res)=>{
    
    res.render('calculos',{
        estudiante:req.body.nombre,
        nota1:parseInt(req.body.nota1),
        nota2:parseInt(req.body.nota2),
        nota3:parseInt(req.body.nota3)
    })
});

app.get('/coordinador',(req,res)=>{
    res.render('coordinador')
})

app.get('/interesado',(req,res)=>{
    res.render('interesado')
})

app.post('/curso',(req,res)=>{
    let ressult=cursos.crear(parseInt(req.body.id),req.body.nombre,req.body.descripcion,parseInt(req.body.valor),req.body.modalidad,parseInt(req.body.duracion))
    
    if(ressult){
        res.status(200).render('coordinador')
    }else{
        res.status(400).render('index')
    }
    
})

app.post('/inscribir',(req,res)=>{
    let result=cursos.inscribir(parseInt(req.body.id),req.body.cedula,req.body.nombre,req.body.corre,req.body.tel)
    console.log(result + req.body.id)
    if(result){
        res.status(200).render('index')
    }else{
        res.status(400).render('index')
    }
    
})

app.get('/curso',(req,res)=>{
    res.render('')
})

app.get('*',(req,res)=>{
    res.render('error',{
        estudiante:'error'
    })
});

app.listen(3000,()=>{
    console.log('escuchando en el puerto 3000')
})

