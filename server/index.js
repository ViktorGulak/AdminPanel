require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./models/db_connection");
const models = require("./models/relation");
const router = require("./routing/mainRouter");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json({ extendet: true }));
app.use(express.static(__dirname + "/static"));
app.use("/static/user_photo", express.static("static/user_photo"));
app.use("/", router);

// Функция запуска сервера
const serverStart = async () => {
  try {
    // Синхронизация моделей с БД
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    app.listen(PORT, () => {
      console.log("Сервер начал прослушивание");
    });
  } catch (e) {
    console.log(e);
  }
};

serverStart();
