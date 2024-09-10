const express  = require('express');
const app = express();
// const bodyparser = require('body-parser');

const cors=require("cors");
// app.use(cors({origin:"*"
// ,credentials:true,
// methods:"GET,PUT,POST,DELETE",
// allowedHeaders:"Content-Type,Authorization",
// preflightContinue:false,
// optionsSuccessStatus:204,
// maxAge:86400,
// exposedHeaders:["Content-Type","Authorization"],

// }));

app.UseCors(x => x
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader());

app.UseHttpsRedirection(); 


// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({extended: false}));

const port = process.env.PORT || 3000;

app.use(require('./routes/correo.Routes'));


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    // Access-Control-Allow-Origin: *
});
