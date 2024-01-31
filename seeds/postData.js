
const { Post } = require('../model');

const postData = [
  {
    "created_on": "01/29/2024",
    "title": "My Cool Blog Post",
    "text": "This is my cool blog post about classes",
    "user_id": 1
  },
  {
    "created_on": "01/30/2024",
    "title": "My Cool Blog Post 2",
    "text": "This is my cool blog post about classes",
    "user_id": 2
  },
  {
    "created_on": "01/30/2024",
    "title": "My Cool Blog Post 3",
    "text": "This is my cool blog post about classes",
    "user_id": 4
  },
  {
    "created_on": "01/30/2024",
    "title": "My Cool Blog Post 4",
    "text": "This is my cool blog post about classes",
    "user_id": 3
  },
  {
    "created_on": "01/29/2024",
    "title": "My Cool Blog Post",
    "text": "This is my cool blog post about classes",
    "user_id": 1
  },
  {
    "created_on": "01/30/2024",
    "title": "My Cool Blog Post 2",
    "text": "This is my cool blog post about classes",
    "user_id": 2
  },
  {
    "created_on": "01/30/2024",
    "title": "My Cool Blog Post 3",
    "text": "This is my cool blog post about classes",
    "user_id": 4
  },
  {
    "created_on": "01/30/2024",
    "title": "My Cool Blog Post 4",
    "text": "This is my cool blog post about classes",
    "user_id": 3
  }
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;