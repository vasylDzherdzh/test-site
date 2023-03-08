import { Express } from "express";
import db from "./config/database.js"
import productRoutes from "./routes/index.js"
import cors from "cors"

const app = Express();

try {
    await db. authenticate();
    console.log('Databae connect...');
} catch (error){
('Connection error:', error);
}
app.use(cors());
app.use(Express.json());
app.use('./products', productRoutes);

app.lisen(5000, ()=> console.log('Server runing is 5000 port'));