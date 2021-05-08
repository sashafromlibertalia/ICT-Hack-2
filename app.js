let express = require('express'),
    path = require('path'),
    loginRoutes = require('./routes/login'),
    homeRoutes = require('./routes/home'),
    db = require('./db'),
    session = require('express-session'),
    varMiddleware = require('./middleware/variables')

const app = express()

app.set('view engine', 'hbs')
app.set('views', 'views')

db.connectToDB

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(session({
//     secret: 'some secret key',
//     resave: false,
//     saveUninitialized: false
// }))
// app.use(varMiddleware)


app.use('/', loginRoutes)
app.use('/', homeRoutes)


const PORT = process.env.PORT || 3000
app.listen(PORT)