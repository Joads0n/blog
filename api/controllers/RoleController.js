const model = require('../models');

class RoleController {

  static async getAllRoles(req, res) {
    try {
      const roles = await model.Roles.findAll();
      return res.status(200).json(roles);  
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = RoleController;