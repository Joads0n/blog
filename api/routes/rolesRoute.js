const { Router } = require('express');
const RoleController = require('../controllers/RoleController');

const router = Router();

router
    .get('/roles', RoleController.getAllRoles)
    .get('/roles/:id', RoleController.getRoleId)
    .post('/roles', RoleController.createRole)
    .put('/roles/:id', RoleController.updateRole)

module.exports = router;