let {Router} = require('express'),
    router = Router(),
    db = require('../db'),
    User = db.users,
    moment = require('moment')

const names = ["Вася", "Олег", "Кизару", "Петька", "Эрик"]
const surnames = ["Пупкин", "Непочелович", "Лох", "Иванов", "Клептон"]
const Time = new Date()

function greeting() {
    let text = ""
    for (j = 0; j < 6; j++) {
        if (Time.getHours() === j) {
            text = "Доброй ночи, "
        }
    }
    for (j = 6; j < 12; j++) {
        if (Time.getHours() === j) {
            text = "Доброе утро, "
        }
    }
    for (j = 12; j < 18; j++) {
        if (Time.getHours() === j) {
            text = "Добрый день, "
        }
    }
    for (j = 18; j < 24; j++) {
        if (Time.getHours() === j) {
            text = "Добрый вечер, "
        }
    }
    return text
}

router.post('/', (req, res) => {
    let login = req.body.login,
        pass = req.body.pass,
        index = Math.floor(Math.random() * names.length)
    db.connectToDB.then(() => {
        User.find({
            login: login,
            password: pass
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
                    console.log("Сохранил нового юзера")
                    res.redirect('/home')
                })
            } else {
                console.log("Такой юзер есть")
                res.redirect('/home')
            }
        })
    })
})

router.get('/', async (req, res) => {
    //await res.render('login')
    await res.render("home", {
        isHome: true,
        message: greeting() ,
        title: "Главная"
    })
})

module.exports = router