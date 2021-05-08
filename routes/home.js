const {Router} = require('express')
const router = Router()
const Time = new Date()
const up = "#53F293"
const down = "#FF1B51"

let cards = [
    {
        header: "Выполненные задачи",
        header_img: "url(/assets/doneCard.svg)",
        text: "15",
        arrow: "url(/assets/up-arrow.svg)",
        stat_color: up,
        stat_info: "15%",
        stat_text: "с прошлой недели"
    },
    {
        header: "Прошедшие дедлайны",
        header_img: "url(/assets/unfinishedCard.svg)",
        text: "2",
        arrow: "url(/assets/up-arrow.svg)",
        stat_color: up,
        stat_info: "10%",
        stat_text: "с прошлой недели"
    },
    {
        header: "КПД",
        header_img: "url(/assets/KPDCard.svg)",
        text: "56%",
        arrow: "url(/assets/down-arrow.svg)",
        stat_color: down,
        stat_info: "15%",
        stat_text: "с прошлой недели"
    },
    {
        header: "Ближайший дедлайн",
        header_img: "url(/assets/calendarCard.svg)",
        text: "09.05",
        arrow: "",
        stat_color: "",
        stat_info: "",
        stat_text: "..."
    }]

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

router.get("/home", async (req, res) => {
    await res.render("home", {
        isHome: true,
        message: greeting(),
        title: "Главная",
        cards: cards
    })
})
module.exports = router