const router = require('express').Router();
const { User, Comment, Post } = require('../model');

router.use('/dashboard', (req, res) => {
    // req.session.user_id

    res.render('dashboard', {layout : 'main'})
  })

module.exports = router;