const server = require('../src/config/server');
const app = server.initServer();
const database = require('../src/config/database');
database.connect();

app.get('/', (req, res) => {
    res.status(200).json({ message: 'API Funcionando', status: 'OK' })
})

app.listen(3000, async () => {
    console.log('API Funcionando http://localhost:3000/')
})