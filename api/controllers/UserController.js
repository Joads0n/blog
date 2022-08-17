const model = require('../models');

class UserController {

  static async getAllUsers(req, res) {
    try {
      const users = await model.Users.findAll();
      return res.status(200).json(users);  
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  
  static async getUserId(req, res) {
    const { id } = req.params;
    try {
      const user = await model.Users.findOne({
        where: {
          id: Number(id)
        }
      });
      return res.status(200).json(user);  
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async createUser(req, res) {
    const { name, birthdate, email, password, role_id } = req.body;
    const formattedDate = await UserController.convertDate(birthdate);
      
    try {
      const newUser = await model.Users.create({
        name: name,
        birthdate: formattedDate,
        email: email,
        password: password,
        role_id: Number(role_id)
      });
      return res.status(200).json(newUser);  
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updateUser(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
      await model.Users.update(data, { where: { id: Number(id) } });
      const updatedUser = await model.Users.findOne({
        where: {
          id: Number(id)
        }
      }); 
      return res.status(200).json(updatedUser);  
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deleteUser(req, res) {
    const { id } = req.params;
    try {
      await model.Users.destroy({
        where: {
          id: Number(id)
        }
      }); 
      return res.status(200).json(`O usuário de ID=${id} foi deletado com sucesso.`);  
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async convertDate(date) {
    return date.split("/").reverse().join("-");
  }
}

module.exports = UserController;