const router = require('express').Router();
const { Comment, Post, User } = require('../../model/');

router.get('/post', async (req, res) => {
    const dbPostData = await Post.findAll();

    const postData = dbPostData.map((data) => data.get({ plain: true }));

    
})