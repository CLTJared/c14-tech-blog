const User = require('./User');
const BlogPPostost = require('./Post');
const Comment = require('./Comment');

User.hasMany(BlogPost);
Post.hasMany(Comment);


module.exports = { User, Post, Comment };