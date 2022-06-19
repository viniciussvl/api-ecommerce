const mongoose = require('mongoose');

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_name;

const connect = function() {
    mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@${dbName}.knwqpw3.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log('Conectado ao MongoDB');
    })
    .catch((error) => {
        console.log(error);
    })
}

const disconnect = function() {
    mongoose.disconnect()
    .then(() => {
        console.log('Desconectado do mongo')
    }) 
    .catch((error) => {
        console.log(error);
    })
}

module.exports = {
    connect,
    disconnect
}