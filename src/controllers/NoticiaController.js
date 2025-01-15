const NoticiaModel = require('../models/NoticiaRepository.js');

class NoticiaRepository {
    static async getAllNoticias(req, res) {
        try {
            const news = await NoticiaRepository.findAll();
            res.json(news);
        } catch (erro) {
            console.error('Erro ao verificar notícias:', erro);
            return res.status(500).json({ message: 'Erro ao verificar notícias.', erro });
        }
    }

    static async createNoticia(req, res) {
        try {
            const {data} = req.body;

            if (!data) {
                return res.status(400).json({ message: 'Erro, data inválida.' });
            }

            const noticia = await NoticiaRepository.createNoticia({ data });
            return res.status(201).json({ message: 'Notícia criada com sucesso.', data: noticia });
        } catch (erro) {
            console.error('Erro ao criar notícia:', erro);
            return res.status(500).json({ message: 'Erro ao criar notícia.', erro });
        }
    }

    static async deleteNoticia(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                return res.status(400).json({ message: 'Id da notícia não foi informado.' });
            }

            const deleta = await NoticiaModel.delete(id);
            if (deleta) {
                res.json({ message: 'Notícia deletada com sucesso.' });
            } else {
                res.status(404).json({ message: 'Notícia não encontrada.' });
            }
            
        } catch (erro) {
            console.error('Erro ao deletar notícia:', erro);
            return res.status(500).json({ message: 'Erro ao deletar notícia.', erro });
        }
    }
}

module.exports = NoticiaRepository;
