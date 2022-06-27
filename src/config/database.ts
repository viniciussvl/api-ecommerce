import mongoose from "mongoose";

class Database {
    private host: any;

    constructor() {
        this.host = process.env.DB_HOST;
    }

    async connect(): Promise<void> {
        mongoose.connect(this.host)
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
            console.log('Desconectado do MongoDB')
        }) 
        .catch((error: any) => {
            console.log(error);
        })
    }
}

export default  Database;