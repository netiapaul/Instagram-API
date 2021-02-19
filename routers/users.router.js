const express = require('express');
const router = express.Router();
const {postNewUsers} = require('../controllers/users.controller');

router.route('/').post(postNewUsers);

module.exports = router;