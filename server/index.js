import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import connectDB from './src/config/db.js'
import apiRoutes from './src/routes/apiRoutes.js'


const PORT = process.env.PORT || 3001

connectDB()
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello, World!')
})

app.use('/api/url', apiRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})