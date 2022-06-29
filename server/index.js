import express from "express"
import morgan from "morgan";
import cors from "cors"

let corsOptions = {
    origin: 'http://localhost:3000/',
    credentials: true
}
const app = express();
const PORT = 4003;
app.use(morgan("tiny"));
app.use(cors());
app.get("/",(req,res)=>{
    return res.status(200).json(1);
});

app.listen(PORT,()=>{
    console.log("PORT 4003");
});