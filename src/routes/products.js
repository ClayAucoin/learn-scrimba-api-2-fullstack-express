// src/routes/products.js

import express from "express"
import { getGenres, getProducts } from "../controllers/productControllers.js"

const router = express.Router()

router.get("/", getProducts)
router.get("/genres", getGenres)

export default router