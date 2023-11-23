const express = require('express');
// для доступа к переменным окружения
require('dotenv').config();

const sequelize = require("./db/db");
const models = require("./models/models");
const app = express();
const cors = require('cors');
const PORT = process.env.PORT;
const router = require('./routes/index');
const errorHandler = require("./middleware/errorHandling");

// чтобы отправлять запросы с браузера в БД
app.use(cors());

// наше приложение погло парсить json формат
app.use(express.json());

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
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Listening PORddT ${PORT}`))
   } catch (error) {
    console.log(error)
   } 
}

start();