import  express  from "express";
import db from "./config/database.js";
import productRoures from "./routes/index.js";
import cors from "cors";

const app=express();

try {
    await db.authenticate();
    console.log('Connected');
}
catch(error) {
    console.log('Connection error', error);
}
app.use(cors());
app.use(express.json());
app.use('/products', productRoures);

app.listen(5000, ()=> console.log('Server running at port 5000') );