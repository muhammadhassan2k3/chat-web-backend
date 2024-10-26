import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/connectDB.js'
dotenv.config()

const app = express()
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}))

const PORT = process.env.PORT || 8080

app.get('/', (request, response) => {
    response.json({
        message: 'server running at :', PORT,

    })
}) 

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
})


    