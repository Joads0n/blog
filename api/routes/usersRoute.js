const { Router } = require('express');
const RoleController = require('../controllers/UserController');

const router = Router();

router
    .get('/usuarios', RoleController.getAllUsers)
    .get('/usuarios/:id', RoleController.getUserId)
    .post('/usuarios', RoleController.createUser)
    .put('/usuarios/:id', RoleController.updateUser)
    .delete('/usuarios/:id', RoleController.deleteUser)

module.exports = router;