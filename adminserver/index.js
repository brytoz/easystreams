const express = require('express')
const timesyncServer = require('timesync/server');
const dotenv = require('dotenv')
const db = require('./db/db')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const adminRoute = require('./router/admin')
// const table = require('./router/table')
const multerError = require('./rules/handleError')

const nDate = new Date().toLocaleString('en-US', {
    timeZone: 'Africa/Lagos'
  });


const app = express()


// enable secure credentials
dotenv.config()
// ALLOW COOKIES 
app.use(cookieParser())

// parse application/json
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// handle timesync requests
app.use('/timesync', timesyncServer.requestHandler);

const corsOption = {
    // origin: true,
    origin: ["http://localhost:3001", "http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
    optionSuccessStatus:200,
}

app.use(cors(corsOption))



// app.use('/api/user', cors(corsOption),  authRoute)
app.use('/api/admin', cors(corsOption),  adminRoute)

// app.use('/api',cors(corsOption), table)
 
app.use('/uploads',  express.static('./uploads'))
app.use(multerError)

db.authenticate().then((res)=> console.log('Connected to Easystreams successfully.')
).catch((err) => console.error('Unable to connect to the database:', err));


app.listen(process.env.LOCAL_PORT, console.log("Connection started at", process.env.LOCAL_PORT));
