const { Comment } = require('../model');

const commentData = [
  {
    "created_on": "01/29/2024",
    "text": "This is my cool comment about your post.",
    "user_id": 1,
    "post_id": 1
  },
  {
    "created_on": "01/29/2024",
    "text": "This is my cool comment about your post.",
    "user_id": 1,
    "post_id": 2
  },
  {
    "created_on": "01/29/2024",
    "text": "This is my cool comment about your post.",
    "user_id": 1,
    "post_id": 5
  },
  {
    "created_on": "01/29/2024",
    "text": "This is my cool comment about your post.",
    "user_id": 2,
    "post_id": 3
  },
  {
    "created_on": "01/29/2024",
    "text": "This is my cool comment about your post.",
    "user_id": 4,
    "post_id": 5
  },
  {
    "created_on": "01/29/2024",
    "text": "This is my cool comment about your post.",
    "user_id": 3,
    "post_id": 3
  },
  {
    "created_on": "01/29/2024",
    "text": "This is my cool comment about your post.",
    "user_id": 3,
    "post_id": 2
  }
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;