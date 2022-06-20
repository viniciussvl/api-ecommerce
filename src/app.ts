const server = require('../src/config/server');
const app = server.initServer();
const database = require('../src/config/database');
database.connect();



app.listen(3000, async () => {
    console.log('API Funcionando http://localhost:3000/')
})