import mongoose from "mongoose"

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        const connection = mongoose.connection
        connection.on('connected', () => {
            console.log('Connected to MongoDB')
        })

        connection.on('error', (error) => {
            console.error('something is wrong in MongoDB',error)
        })
    } catch (error) {
        console.error('getting error during connect DB',error)
    }
}

export default connectDB;