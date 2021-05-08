const {Router} = require('express')
const router = Router()

router.post('/home', async (req, res) => {
    //req.session.isLogged = true;
    await res.redirect('/home')
})

router.get("/home", async(req, res) => {
    await res.render("home", {
        isHome: true,
        title: "Главная"
    })
})
module.exports = router