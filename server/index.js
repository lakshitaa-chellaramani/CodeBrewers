import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { router } from './router.js'
import Connection from './Connection.js'

const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()
app.use("/",router)

Connection()

app.listen(8001,()=>{
    console.log("Listening...")
})