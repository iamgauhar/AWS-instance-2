const express = require("express")

const app = express()

app.get("/home", (req, res) => {
    res.json({ msg: "From instance 2" })
})

app.listen(3000, () => {
    console.log("Listning 300");
})