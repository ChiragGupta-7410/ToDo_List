const express = require('express')
const mongoose = require('mongoose')

const app = express()
//Enter your atlas mongoDb cluster connection string in url
const url = 'Altas mongoDb Cluster connection string'

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

app.use(require("./routes/index"))

app.use(require("./routes/todo"))
app.listen(3000, () => console.log("Server started listening on port: 3000"))
