const express = require("express")
const ProductsController = require("../controllers/ProductsController")

const router = express.Router()

router.get("/", ProductsController.index)
router.get('/:slug', ProductsController.show)

module.exports = router