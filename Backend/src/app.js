import express, { urlencoded } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import connectDb from './config/database.js'
import UserRoute from './Routes/user.routes.js'
import Routes from './Routes/routes.js'

dotenv.config()

const app = express()

app.use(express.json())
app.use(cookieParser()) 
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use(Routes())

const PORT = process.env.PORT || 4000;


app.listen(PORT, async () => {
    console.log(`Server is running port http://localhost:4000`);
    await connectDb();
})