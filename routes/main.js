const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.redirect('clucks/')
})
//sign in page
router.get('/sign_in', (req, res) => {
    res.render('signin');
})

const COOKIE_AGE = 1000 * 60 * 60 * 24 * 7;
//cookies
router.post('/sign_in', (req, res) => {
    const parameters = req.body;
    res.cookie('username', parameters.username, { maxAge: COOKIE_AGE});
    res.redirect('/');  
});

router.get('/sign_out', (req, res) => {
    res.clearCookie('username');
    res.redirect('/');
});


module.exports = router;
