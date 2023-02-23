const router = require("express").Router()
const toDo = require("../models/toDo")

router.get("/", async(req, res) => {
    const allToDo = await toDo.find();
    res.render("index",{todo: allToDo});
})


module.exports = router;