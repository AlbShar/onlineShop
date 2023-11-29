// для доступа к переменным окружения
require('dotenv').config();

import express from "express";
import {sequelize} from "./db/db";

const fileUpload = require("express-fileupload");
const models = require("./models/models");
const app = express();
const cors = require('cors');
const PORT = process.env.PORT;
const router = require('./routes/index');
const errorHandler = require("./middleware/errorHandling");
const path = require("path");

// чтобы отправлять запросы с браузера в БД
app.use(cors());

// наше приложение погло парсить json формат
app.use(express.json());

// для загрузки файлов
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router);

app.get('/', (req, res) => {
    res.status(200).json({message: "WORKING!!!!!"})
})

// Обработка ошибок, должен быть последним так как он обрабатывает ошибки
app.use(errorHandler);



const start = async () => {
   try {
    // подлключение к БД
    await sequelize.authenticate();
    // сравнивает состояние БД со схемой данных 
    await sequelize.sync({alter: true});
    app.listen(PORT, () => console.log(`Listening P ${PORT}`))
   } catch (error) {
    console.log(error)
   } 
}

start();