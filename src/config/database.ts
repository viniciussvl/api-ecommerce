import mongoose from "mongoose";

class Database {
    private dbUser: any;
    private dbPassword: any;
    private dbName: any;

    constructor() {
        this.dbUser = process.env.DB_USER;
        this.dbPassword = process.env.DB_PASS;
        this.dbName = process.env.DB_NAME;
    }

    async connect(): Promise<void> {
        mongoose.connect(`mongodb+srv://${this.dbUser}:${this.dbPassword}@${this.dbName}.knwqpw3.mongodb.net/?retryWrites=true&w=majority`)
        .then(() => {
            console.log('Conectado ao MongoDB');
        })
        .catch((error: any) => {
            console.log(error);
        })
    }

    async disconnect(): Promise<void> {
        mongoose.disconnect()
        .then(() => {
            console.log('Desconectado do mongo')
        }) 
        .catch((error: any) => {
            console.log(error);
        })
    }
}

export default  Database;