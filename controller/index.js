const router = require('express').Router();
const { User, Comment, Post } = require('../model');
const dashboardRoute = require('./dashboard');
const authRoute = require('./auth');
//const apiRoutes = require('./api');
//router.use('/api', apiRoutes)

router.use('/dashboard', dashboardRoute)
router.use('/login', authRoute)
router.use('/signup', authRoute)

//Homepage routing
router.use('/', async (req, res) => {

  const dbPostData = await Post.findAll({
    order: [[ 'created_on', 'DESC']],
    include: [{
        model: User,
        attributes: ['name'],
        required: true
      },
      {
        model: Comment,
        required: false,
        attributes: ['id'],
      }
    ],
  })

  const postData = dbPostData.map((data) => data.get({ plain: true }));
  console.log(postData)

  res.render('homepage', { postData , layout : 'main' })
});

module.exports = router;