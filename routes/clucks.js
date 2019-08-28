const express = require('express');
const router = express.Router();
const knex = require('../db/client');


router.get('/new', (req, res) => {
	res.render('clucks/new');
});

router.post('/new', (req, res) => {
    const formContent = req.body;
    console.log(formContent);
	knex('posts')
		.insert({
			content: formContent.content,
            img_url: formContent.img_url,
            username: formContent.username,
		})
		.returning('*')
		.then(() => {
			res.redirect('/clucks');
		});
});


router.get('/clucks', (req, res) => {
	knex('posts')
		.orderBy('createdAt', 'desc')
		.then(posts => {
			res.render('clucks/index', { posts: posts });
		});
});

module.exports = router;