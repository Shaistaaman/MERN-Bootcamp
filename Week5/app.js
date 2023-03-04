const express = require("express");
const bodyParser = require("body-parser");
const DB = require("./Database/connectDB")
const cors = require('cors');
//const mongoose = require("mongoose")
const users = require("./Database/models/user.js")
const userRouter = require("./Routes/user.js")

const app = express();
require("dotenv").config()

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use('/api', userRouter)

// mongoose.connect("mongodb+srv://admin:EzzyAppUser@cluster0.4yhpxdj.mongodb.net/users?retryWrites=true&w=majority", { useNewUrlParser: true })
//     .then(() => {
//         console.log("Connected to MongoDB")
//     })
//     .catch(error => console.log(error))
DB()

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

//mongoose.connection.close()
