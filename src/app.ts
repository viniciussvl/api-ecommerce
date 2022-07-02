import Database from "../src/config/database";
import server from "../src/config/server";

const app = server.initServer();

const database = new Database();
database.connect();

app.listen(3000, async () => {
  console.log("API Funcionando http://localhost:3000/");
});
