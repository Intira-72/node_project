import express from 'express';
import { createRequire } from "module";

const productsRouter = express.Router()
const require = createRequire(import.meta.url);
const products = require("../../data/products.json");

productsRouter.route("/").get((req, res) => {
    res.render("products", { products })
})

productsRouter.route("/:id").get((req, res) => {
    const id = req.params.id;
    res.render("product", {
        product: products[id]
    })
})

export default productsRouter;