const {Router} = require('express')
const router = Router()

router.get('/home', async (req, res) => {
    res.render('home', {
        title: 'Главная',
        isCourses: true,
    })
})

module.exports = router