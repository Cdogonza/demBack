const express  = require('express');
const app = express();
let cors = require('cors');
const bodyparser = require('body-parser');

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}
app.use(cors(corsOptions));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

const port = process.env.PORT || 3000;

app.use(require('./routes/correo.Routes'));


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);

});