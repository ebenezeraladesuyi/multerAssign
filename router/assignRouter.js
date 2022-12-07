const express = require("express")
const router = express.Router()
const uploader = require("../config/multer")
const { addUp, allGet } = require("../controller/detailsController")

router.route("/profile/new").post(uploader, addUp)
router.route("/profile").get(uploader, allGet)

module.exports = router