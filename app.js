//Requirements

const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const path = require('path');


const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

// Static Path

app.use(express.static(path.join(__dirname, 'public')));

// Cookies

app.use(cookieParser())
app.use(logger("dev"));
app.use(express.urlencoded({extended: true}));



app.use((req, res, next) => {   
    const username = req.cookies.username;
    res.locals.loggedIn = username || '';
    next();
});



// Routes

const cluckRoute = require('./routes/clucks');
const mainRoute = require('./routes/main');

app.use('/', cluckRoute);
app.use('/', mainRoute);

const PORT = 4545;
const ADDRESS = 'localhost';

app.listen(PORT, ADDRESS, (req, res) => {
    console.log(`Server live on ${ADDRESS}:${PORT}`);
})