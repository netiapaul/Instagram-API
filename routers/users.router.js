const express = require('express');
const router = express.Router();
const {postNewUsers,getAllUsers,deleteUsers} = require('../controllers/users.controller');

router.route('/').post(postNewUsers).get(getAllUsers).delete(deleteUsers);

module.exports = router;