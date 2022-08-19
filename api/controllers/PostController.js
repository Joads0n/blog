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

  static async updatePost(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
      await model.Posts.update(data, { where: { id: Number(id) } });
      const updatedPost = await model.Posts.findOne({
        where: {
          id: Number(id)
        }
      }); 
      return res.status(200).json(updatedPost);  
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deletePost(req, res) {
    const { id } = req.params;
    try {
      await model.Posts.destroy({
        where: {
          id: Number(id)
        }
      }); 
      return res.status(200).json(`O Post de ID=${id} foi deletado com sucesso.`);  
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getPostByEditor(req, res) {
    const { editor_id } = req.params;
    try {
      const post = await model.Posts.findOne({
        where: {
          editor_id: Number(editor_id)
        }
      });
      if (post === null) {
        return res.status(200).json(`Não foi localizado nenhum post do editor de id=${editor_id}.`); 
      }
      return res.status(200).json(post);  
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = PostController;