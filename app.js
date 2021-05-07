let express = require('express'),
    path = require('path'),
    loginRoutes = require('./routes/login'),
    homeRoutes = require('./routes/home'),
    db = require('./db'),
    exphbs = require('express-handlebars')

const app = express()


const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')


db.connectToDB

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/', loginRoutes)
app.use('/', homeRoutes)

// app.use('/home', home)

const PORT = process.env.PORT || 3000
app.listen(PORT)