const express = require('express')
const mongoose = require('mongoose')

const app = express()
// const pasword = 'qg2v5ArebgY9F3Kp'
const url = 'mongodb+srv://ChiragGupta7410:qg2v5ArebgY9F3Kp@todolist.57mn6fi.mongodb.net/?retryWrites=true&w=majority'

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true ,
}
mongoose.connect(url, connectionParams)
.then( () => {
    console.log('Connected to the Database')
})
.catch( (err) => {
    console.error('Error Connection to the Database')
    console.log(err)
})


app.use(express.urlencoded({extended: true}));
app.use('/public',express.static("public"));
app.set("view engine","ejs")
//mongodb cluster pasword: 3eWSeO7APkNubzuM

app.use(require("./routes/index"))

app.use(require("./routes/todo"))
app.listen(3000, () => console.log("Server started listening on port: 3000"))
