require('dotenv').config();

const express = require("express");
const bodyParser = require('body-parser');
const db = require("./src/models");


const userRoutes = require('./src/routes/userRoutes');

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.set('view engine', 'ejs');


app.use('/api', userRoutes);


db.sequelize.sync().then((req) => {
    app.listen(3000, () => {
        console.log("server is running on port 3000");
    });
});