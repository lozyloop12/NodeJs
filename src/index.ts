import "reflect-metadata";
import { createConnection, ConnectionOptions } from "typeorm";
var express = require('express')
var app = express()
app.use(express.json())
import { User } from "./entity/User";
import routes from "./routes/user";

let config: ConnectionOptions = {
    type: "mongodb",
    host: "localhost",
    port: 27017,
    database: "test",
    entities: [User],
    useUnifiedTopology: true
}

async function main() {
    await createConnection(config);
    app.listen(3000, function () {
        console.log("Sever is running with port 3000");

    })
}

routes(app);

main();
