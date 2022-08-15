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
  
  static async getRoleId(req, res) {
    const { id } = req.params;
    try {
      const role = await model.Roles.findOne({
        where: {
          id: Number(id)
        }
      });
      return res.status(200).json(role);  
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async createRole(req, res) {
    const { role } = req.body;
    try {
      const newRole = await model.Roles.create(role)
      return res.status(200).json(newRole);  
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = RoleController;