const {Router} = require('express')
const router = Router()

router.get('/', async (req, res) => {
    res.render('login')
})

router.post('/', async (req, res) => {
    req.session.isLogged = true;
    res.redirect('home')
})

module.exports = router