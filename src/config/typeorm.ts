import { createConnection } from "typeorm"
import path from 'path';

export async function connecte(){
    await createConnection({
        type: "sqlite",
        database: path.join(__dirname, "../../", "db.sqlite3"),
        synchronize:true,
        entities: [path.join(__dirname, "../entity", "*")],
    });
}