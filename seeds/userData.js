const { User } = require('../model');

const userData = [
  {
    "name": "Jared",
    "email": "jared@jaredclt.com",
    "password": "password123"
  },
  {
    "name": "Chad",
    "email": "chad@jaredclt.com",
    "password": "password123"
  },
  {
    "name": "Kyle",
    "email": "kyle@jaredclt.com",
    "password": "password123"
  },
  {
    "name": "Deven",
    "email": "deven@jaredclt.com",
    "password": "password123"
  }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;