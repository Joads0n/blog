const model = require('../models');

class PostController {

  static async getAllPosts(req, res) {
    try {
      const posts = await model.Posts.findAll();
      return res.status(200).json(posts);  
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  
  static async getPostId(req, res) {
    const { id } = req.params;
    try {
      const post = await model.Posts.findOne({
        where: {
          id: Number(id)
        }
      });
      return res.status(200).json(post);  
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async createPost(req, res) {
    const { title, content, editor_id } = req.body;
      
    try {
      const newPost = await model.Posts.create({
        title: title,
        content: content,
        editor_id: Number(editor_id)
      });
      return res.status(200).json(newPost);  
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

module.exports = PostController;