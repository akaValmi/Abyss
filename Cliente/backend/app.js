const express = require('express');
const path=require('path');
const bodyParser=require('body-parser');
const app=express();
const mongoose=require('mongoose');
const User=require('./models/user');
const { connect } = require('http2');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'dist')));

const mongo_uri='mongodb://localhost/Usuario';

mongoose.connect(mongo_uri, function(err){

    mongo_uri,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        keepAlive: true
    }

const connection = mongoose.connection;
if(err){
    console.log("Error al conectar con la base de datos");
}
connection.once('open', () => {
    console.log("Conectado a la base de datos");
})

});

app.post('/register',(req,res)=>{
 const {nombre,apellido,correoEntrada,contraseñaEntrada}=req.body;
const user = new User({nombre,apellido,correoEntrada,contraseñaEntrada});

user.save((err,user)=>{
    if(err){
        res.status(500).send(err);
    }else{
        res.status(200).send('Usuario registrado');
    }});

});

app.post('/authenticate',(req,res) =>{
 User.findOne({correoEntrada}, (err,user) =>{
    
    if(err){
        res.status(500).send(err);
    }else if(!user){
        res.status(404).send('Usuario no encontrado');
    }else{
        user.contraseñaCorrecta(contraseñaEntrada, (err, result)=>{
            if(err){
                res.status(500).send(err);
            }else if(result){
                res.status(200).send('Autenticación correcta');
            }else{
                res.status(500).send('Usuario o contraseña incorrectos');
            }
        });
    }
});


});

app.listen(3000,()=>{
    console.log("Servidor puerto 3000");
});

module.exports = app;