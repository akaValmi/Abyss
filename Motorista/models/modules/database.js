var mongoose = require('mongoose');
var servidor = '127.0.0.1:27017';
var nombreBD = 'motoristas';

class Database {
    constructor() {
        this.conectar;
    }

    conectar() {
        mongoose.connect(`mongodb://${servidor}/${nombreBD}`)
        .then(result =>console.log("Se conectó a la base de datos"))
        .catch(error=>console.log(error));
    }
}

module.exports = new Database();