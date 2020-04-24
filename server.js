const express = require('express')
const connectDB = require ('./config/db')
const cors= require ("cors")
const app = express()
app.use(cors())

//connect to mongoDB
connectDB()

//init Middleware
    app.use(express.json({extended: false}))

app.get('/',(req,res) => res.json({penis:{
    length: 9000
}}))

//define routes
app.use('/api/users',require('./routes/users'))
app.use('/api/auth',require('./routes/auth'))
app.use('/api/websites',require('./routes/websites'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () =>  console.log(`server started on port ${PORT}`))