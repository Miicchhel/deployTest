import livros from "../models/Livro.js";

class LivroController {

  static listarLivros = async (_req, res) => {
    const response = await livros.find();
    return res.status(200).json(response);
  }

  static listarLivrosPorId = async (req, res) => {
    try {
      const { id } = req.params;
      const response = await livros.findById(id)
      return res.status(200).json(response);
    } catch (error) {
      res.status(400).send({ message: `${error.message} - o id:${id } não consta no banco de dados`});
    }
  }

  static cadastrarLivro = async (req, res) => {
    try {
      let livro = new livros(req.body)
      livro.save();
      res.status(201).send(livro.toJSON());
    } catch (error) {
        res.status(500).send({ message: `${error.message} - falha ao cadastrar o livro`});
    }
  }

  static atualizarLivro = async (req, res) => {
    try {
      const { id } = req.params;
      await livros.findByIdAndUpdate(id, { $set: req.body });
      res.status(200).send({ message: 'Livro atualizado com sucesso' });
    } catch (error) {
      res.status(500).send({ message: `${error.message} - falha ao atualizar o livro`});
    }
  }

  static excluirLivro = async (req, res) => {
    try {
      const { id } = req.params;
      await livros.findByIdAndDelete(id);
      res.status(200).send({ message: 'Livro deletado com sucesso' });
    } catch (error) {
      res.status(500).send({ message: `${error.message} - falha ao deletar o livro`});
    }
  }

}

export default LivroController;