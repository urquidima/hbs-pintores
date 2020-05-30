//importamos los paquetes que requerimos
const express=require('express');
const hbs=require('hbs');

//creamos la aplicacion
const app= express();

//definimos el motor de plantillas 
//node vamos a emplear MVC )vista vamos a utilizar hbs
app.set('view engine', 'hbs');

//generamos los partials
hbs.registerPartials(__dirname+ '/views/partials')

// generamos el sitio estatico
app.use(express.static(__dirname+'/public'))

//configurar mis rutas
app.get('/', (req,res)=>{
    res.render('index');
})

app.get('/davinci', (req,res)=>{
    res.render('da');
})

app.get('/monet', (req,res)=>{
    res.render('monet');
})

app.get('/picasso', (req,res)=>{
    res.render('picasso');
})

app.get('/vangogh', (req,res)=>{
    res.render('van');
})

//arrancamos el servidor web
app.listen(3000, ()=>{
console.log('escuchando el puerto 3000')
})