const multer = require("multer")

const storage = multer.memoryStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads")
    },

    filename: (res, file, cb) => {
        cb(null, file.originalname)
    }
})

const imageUploader = multer({
    storage: storage,
}).single("image")

module.exports = imageUploader