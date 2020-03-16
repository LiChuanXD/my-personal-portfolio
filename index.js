const express = require('express');
const path = require('path');
const helmet = require('helmet');

const app = express();

//middlewares
//helmetjs
app.use(helmet({
    frameguard : {
        action : "sameorigin"
    },
    noCache : true,
    hsts : {
        maxAge : 3600 ,
        force : true
    }
}));

//static files
app.use(express.static(path.join(__dirname , "public")));

//listen to port
const PORT = process.env.PORT || 5000;
app.listen(PORT , ()=>console.log(`App running on port : ${PORT}`))