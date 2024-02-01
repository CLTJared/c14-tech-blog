const router = require('express').Router();
const { User, Comment, Post } = require('../model');
const dashboardRoute = require('./dashboard');
//const apiRoutes = require('./api');
//router.use('/api', apiRoutes)

router.use('/dashboard', dashboardRoute)

//Homepage routing
router.use('/', async (req, res) => {

  const dbPostData = await Post.findAll({
    include:
      {
        model: User,
        attributes: ['name']
      }
  })

  const postData = dbPostData.map((data) => data.get({ plain: true }));
  console.log(postData);

  res.render('homepage', { postData , layout : 'main' })
});

module.exports = router;