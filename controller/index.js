const router = require('express').Router();
//const apiRoutes = require('./api');

router.use('/dashboard', (req, res) => {
  res.render('dashboard', {layout : 'main'})
});

router.use('/', (req, res) => {
  res.render('homepage', {layout : 'main'})
});

module.exports = router;