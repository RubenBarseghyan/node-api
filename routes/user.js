const express = require('express');

const router = express.Router();

const user = require('../controllers/user');

router.get('/', user.getAllUsers);
router.get('/:id', user.getCurrentUser);
router.post('/', user.addUser);
router.delete('/:id', user.deleteUser);
router.patch('/:id', user.updateUser);

module.exports = router;
