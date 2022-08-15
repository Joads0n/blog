const { Router } = require('express');
const RoleController = require('../controllers/RoleController');

const router = Router();

router
    .get('/roles', RoleController.getAllRoles)

module.exports = router;