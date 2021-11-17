import express from 'express';
import db from "./config/database.js";
import router from './routes/route.js';
import itemRouter from "./routes/item.js";
import transactionRouter from "./routes/transaction.js";
import cors from "cors";


try {
    await db.authenticate();
    console.log("Database connected!")
} catch (err) {
    console.log("Connection error:", err);
}
// Init express
const app = express();
// use express json
app.use(express.json());
// use cors
app.use(cors());

app.use(router);
app.use(itemRouter);
app.use(transactionRouter);

app.listen(4040, () => console.log("Server running at port 4040"));