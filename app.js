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

app.get("/", (req, res) => {
    res.send("Hello BorntoDev");
})

app.listen(PORT, () => {
    debug("Listening On Port " + chalk.green(PORT));
})