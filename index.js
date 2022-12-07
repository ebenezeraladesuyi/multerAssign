const express = require("express")
const Port = 8000
const app = express()
app.use(express.json())
const assignRoute = require("./router/assignRouter")
require("./config/db")


app.get("/", (req, res) => {
    res.status(200).json({ message: "server up" })
})

app.use("/", assignRoute)

app.listen(Port, () => {
    console.log(`we all da way up: ${Port}`)
})