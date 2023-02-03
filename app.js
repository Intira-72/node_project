import express, { request } from 'express';
import Debug from 'debug';
import chalk from 'chalk';
import morgan from 'morgan';
import path from 'path';
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const products = require("./data/products.json");

const app = express()

const debug = Debug('app')
const PORT = process.env.PORT;
const productRouter = express.Router()

app.use(morgan('combined'))
app.use(express.static(path.dirname('./public/index.html')))

app.set("views", "./src/views")
app.set("view engine", "ejs")

productRouter.route("/").get((req, res) => {
    res.render("products", products)
})

productRouter.route("/1").get((req, res) => {
    res.render('products')
})

app.use("/products", productRouter)

app.get("/", (req, res) => {
    res.render('index', {username: 'BorntoDev', customer: ['Kitti', 'Kittikorn', 'Kitty']});
})

app.listen(PORT, () => {
    debug("Listening On Port " + chalk.green(PORT));
})