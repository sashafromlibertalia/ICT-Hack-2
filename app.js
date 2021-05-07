let express = require('express'),
    path = require('path'),
    exphbs = require('express-handlebars'),
    homeRoutes = require('./routes/home')
const app = express()

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

app.use('/', homeRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT)