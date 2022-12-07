const mongoose = require("mongoose")
const { Mongoose } = require("mongoose")

const URI = "mongodb://localhost/assign"
mongoose.connect(URI)
mongoose.connection
    .on("open", () => {
    console.log ("database is ready");
    })
    .once("error", (error) => {
        console.log(`server failed ${error}`)
    })

