const mongoose = require("mongoose")

const assignSchema = mongoose.Schema(
    {
        name: {
            type : String,
            required: true
        },
        image: {
            type: String,
        },
        bio: {
            type: String
        }

} ,
    {timeStamp: true}
    )

const assignModel = mongoose.model("assign", assignSchema)

module.exports = assignModel