import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import cors from "cors"

const app = express();

const PORT = process.env.PORT || 8000;

dotenv.config();
connectDB();


// middleware
app.use(cors());
app.use(express.json());



// routes

app.use('/api/auth', authRoute);

app.get("/", (req, res) =>{
  res.send("<h1>Welcome to spotify</h1>");
});


app.listen(PORT, () =>{
  console.log(`listening to the port ${PORT}`);
});