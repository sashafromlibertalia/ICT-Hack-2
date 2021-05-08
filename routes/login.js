let {Router} = require('express'),
    router = Router(),
    db = require('../db'),
    User = db.users,
    moment = require('moment')

const names = ["Вася", "Олег", "Кизару", "Петька", "Эрик"]
const surnames = ["Пупкин", "Непочелович", "Лох", "Иванов", "Клептон"]

router.post('/', async (req, res) => {
    let login = req.body.login,
        pass = req.body.pass,
        index = Math.floor(Math.random() * names.length)
    await db.connectToDB.then(() => {
        User.find({
            login: login,
            pass: pass
        }, (err, result) => {
            if (err) console.error(err)
            if (result.length === 0) {
                new User({
                    login: login,
                    password: pass,
                    name: names[index],
                    surname: surnames[index],
                    createdAt: moment().toDate()
                }).save(() => {
                    console.log("Saved new user")
                    res.redirect('/home')
                })
            }
        })
    })
})

router.get('/', async (req, res) => {
    await res.render('login')
})

router.post('/home', async (req, res) => {
    //req.session.isLogged = true;
    await res.redirect('home')
})

router.get("/home", async(req, res) => {
    await res.render("home", {
        isHome: true
    })
})

module.exports = router