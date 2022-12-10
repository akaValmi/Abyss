const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    correoEntrada: {type: String, unique: true, required: true},
    contraseñaEntrada: {type: String, required: true}
});

userSchema.methods.contraseñaCorrecta = function(password, callback){
    correoEntrada.compare(password, this.contraseñaEntrada, function(err, same){
        if(err){
            callback(err);
        }else{
            callback(err, same);
        }
    });
};

module.exports = mongoose.model('User', userSchema);