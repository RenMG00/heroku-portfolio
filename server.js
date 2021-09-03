const express = require('express')
const app = express()
require("dotenv").config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressjwt = require("express-jwt")
const path = require("path")

const port = process.env.PORT || 8000;
process.env.SECRET 

app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, "client", "build")))

mongoose.connect(
  'mongodb://localhost:27017/trailguide',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  () => console.log('Connected to the DB')
)


app.use('/auth', require('./routes/authRouter.js'))
app.use('/api', expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }))
app.use('/api/mytravel', require('./routes/myTravelRouter.js'))
app.use("/api/users", require("./routes/usersRouter.js"))

app.use((err, req, res, next) => {
  console.log(err)
  return res.send({ errMsg: err.message })
})

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on local port 8000`)
})