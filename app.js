import express from 'express';
import Debug from 'debug';
import chalk from 'chalk';
import morgan from 'morgan';
import path from 'path';


const app = express()

const debug = Debug('app')
const PORT = process.env.PORT;
const productRouter = express.Router()

app.use(morgan('combined'))
app.use(express.static(path.dirname('./public/index.html')))

app.set("views", "./src/views")
app.set("view engine", "ejs")

productRouter.route("/").get((req, res) => {
    res.send("Hello, I'm Products.")
})

productRouter.route("/1").get((req, res) => {
    res.send("Hello, I'm Products 1.")
})

app.use("/products", productRouter)

app.get("/", (req, res) => {
    res.render('index', {username: 'BorntoDev', customer: ['Kitti', 'Kittikorn', 'Kitty']});
})

app.listen(PORT, () => {
    debug("Listening On Port " + chalk.green(PORT));
})