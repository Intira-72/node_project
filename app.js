import express, { request } from 'express';
import Debug from 'debug';
import chalk from 'chalk';
import morgan from 'morgan';
import path from 'path';
import productsRouter from "./src/router/productsRouter.js";

const app = express()

const debug = Debug('app')
const PORT = process.env.PORT;

app.use(morgan('combined'))
app.use(express.static(path.dirname('./public/index.html')))

app.set("views", "./src/views")
app.set("view engine", "ejs")

app.use("/products", productsRouter)

app.get("/", (req, res) => {
    res.render('index', {username: 'BorntoDev', customer: ['Kitti', 'Kittikorn', 'Kitty']});
})

app.listen(PORT, () => {
    debug("Listening On Port " + chalk.green(PORT));
})