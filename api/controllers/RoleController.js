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
      const newRole = await model.Roles.create(role);
      return res.status(200).json(newRole);  
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updateRole(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
      await model.Roles.update(data, { where: { id: Number(id) } });
      const updatedRole = await model.Roles.findOne({
        where: {
          id: Number(id)
        }
      }); 
      return res.status(200).json(updatedRole);  
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deleteRole(req, res) {
    const { id } = req.params;
    try {
      await model.Roles.destroy({
        where: {
          id: Number(id)
        }
      }); 
      return res.status(200).json(`A regra de ID=${id} foi deletado com sucesso.`);  
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = RoleController;