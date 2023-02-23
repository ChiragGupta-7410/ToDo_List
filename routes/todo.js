const router = require('express').Router()

const toDo = require("../models/toDo")

router.post("/add/todo", (req, res) => {
    const {todo} = req.body;
    const newTodo = new toDo({todo: todo})

    newTodo.save()
    .then( () => {
        console.log("Added Successful");
        res.redirect("/");
    })
    .catch( (err) => {
        console.log(err);
    })
})

.get("/delete/todo/:_id", (req, res) => {
    const {_id} = req.params;
    toDo.deleteOne({_id: _id})
    .then( () => {
        console.log('Delete Successfully')
        res.redirect("/")
    })
    .catch( (err) => {
        console.log(err);
    })
})

module.exports = router