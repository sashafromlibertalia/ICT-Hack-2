let express = require('express'),
    path = require('path'),
    login = require('./routes/login'),
    home = require('./routes/home'),
    db = require('./db')

const app = express()

db.connectToDB

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', login)
app.use('/home', home)
// app.use('/home', home)

const PORT = process.env.PORT || 3000
app.listen(PORT)