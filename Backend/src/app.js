import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import connectDb from './config/database.js'

dotenv.config()

const app = express()

app.use(express.json())
app.use(cookieParser()) 
app.use(cors())

const PORT = process.env.PORT || 4000;

app.get('/', (req,res) => {
    res.send("hello")
})
app.listen(PORT, async () => {
    console.log(`Server is running port http://localhost:4000`);
    await connectDb();
})