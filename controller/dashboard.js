const router = require('express').Router();
const { User, Comment, Post } = require('../model');

router.use('/dashboard', (req, res) => {

    
    res.render('dashboard', {layout : 'main'})
  })

module.exports = router;