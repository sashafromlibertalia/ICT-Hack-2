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
let projects = [
    {
        date: "9 мая 2021",
        icon: "url(/assets/projects-icons/today.svg)",
        header: "Платформа для хакатона",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis non feugiat interdum blandit turpis. At pellentesque enim metus, ornare tortor nisl pellentesque id tristique.",
        progress: {
            value: "55%",
            color: "#FFD707"
        },
        tags: [{
            title: "ИТМО",
            color: "linear-gradient(180deg, #45DDF1 0%, #36D99E 100%);"
        }, {
            title: "Программирование",
            color: "linear-gradient(180deg, #F14583 0%, #D93636 100%);"
        }],
        isAdmin: false,
        users: [
            "url(/assets/users/misha.jpg)",
            "url(/assets/users/sasha.jpg)",
            "url(/assets/users/patrik.jpg)",
            "url(/assets/users/isa.jpg)",
        ]
    },
    {
        date: "Выполнен",
        icon: "circle",
        header: "Кубик Рубика",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis non feugiat interdum blandit turpis. At pellentesque enim metus, ornare tortor nisl pellentesque id tristique.",
        progress: {
            value: "100%",
            color: "#53F293"
        },
        tags: [{
            title: "ИТМО",
            color: "linear-gradient(180deg, #45DDF1 0%, #36D99E 100%);"
        }, {
            title: "Лабы",
            color: "linear-gradient(180deg, #4580F1 0%, #363DD9 100%);"
        }],
        isAdmin: true,
        users: [
            "url(/assets/users/misha.jpg)",
            "url(/assets/users/isa.jpg)",
            "url(/assets/users/sasha.jpg)"
        ]
    }
]


router.post('/home', async (req, res) => {
    //req.session.isLogged = true;
    await res.redirect('/home')
})

router.get("/home", async (req, res) => {
    await res.render("home", {
        isHome: true,
        title: "Главная",
        cards: cards,
        projects: projects
    })
})
module.exports = router