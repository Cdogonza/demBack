const express  = require('express');
const app = express();
let cors = require('cors');
const bodyparser = require('body-parser');

const cors=require("cors");

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, x-requested-with");
    next(); // Important
})

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

const port = process.env.PORT || 3000;

app.use(require('./routes/correo.Routes'));


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    // Access-Control-Allow-Origin: *
});