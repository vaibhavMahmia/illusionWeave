import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectionDB  from './config/db.js'
import authRoute from './routes/authRoute.js'

// configure env
dotenv.config()

// database config
connectionDB()

// rest object
const app = express()

// middlewares
app.use(express.json())
app.use(morgan('dev'))

// routes
app.use('/api/v1/auth', authRoute)

// rest api
app.get('/', (req, res)=>{
    res.send({
        message:"Welcome to illusionWave"
    })
})

//PORT
const PORT = process.env.PORT || 8080

//run listen
app.listen(PORT, () => {
    console.log(`Server is running on: ${PORT}`.bgYellow.green)
})