const {Router} = require('express')
const router = Router()
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


router.post('/home', async (req, res) => {
    //req.session.isLogged = true;
    await res.redirect('/home')
})

router.get("/home", async(req, res) => {
    await res.render("home", {
        isHome: true,
        message: greeting(),
        title: "Главная"
    })
})
module.exports = router