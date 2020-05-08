const express = require('express');
const app = express();

const routes = require('./routes');

app.use(express.json());
app.use(routes);

app.use("/", function (req, res) {
    res.send("Estou no ar");
})
module.exports = app;