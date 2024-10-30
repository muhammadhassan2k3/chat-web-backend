const mongoose = require("mongoose")

async function connectDB() {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Connected to MongoDB', connection.connection.host)
    } catch (error) {
        console.error('getting error during connect DB', error)
        process.exit()
    }
}

module.exports = connectDB;