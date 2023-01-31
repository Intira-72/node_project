import express from 'express';
import Debug from 'debug';
import chalk from 'chalk';
import morgan from 'morgan';
import path from 'path';


const app = express()

const debug = Debug('app')
const PORT = process.env.PORT;

app.use(morgan('combined'))
app.use(express.static(path.dirname('./public/index.html')))

app.set("views", "./src/views")
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render('index', {username: 'BorntoDev', customer: ['Kitti', 'Kittikorn', 'Kitty']});
})

app.listen(PORT, () => {
    debug("Listening On Port " + chalk.green(PORT));
})