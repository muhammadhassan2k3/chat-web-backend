const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/connectDB.js');
const userRoutes = require('./routes/userRoutes.js');

dotenv.config()

const app = express()
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}))

const PORT = process.env.PORT || 5002

app.get('/', (request, response) => {
    response.json({
        message: 'server running at :', PORT,

    })
}) 

app.use('/api/user', userRoutes)

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
})


    