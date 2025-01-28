const HistoricoPesquisaRepository = require('../models/HistoricoPesquisaRepository.js');

class HistoricoPesquisaController{
    // Verificar todo o histórico do usuario
    static async getAllHistorico(req, res){
        try{
            const userId = req.params.id;

            if(!userId){
                return res.status(400).json({message: 'ID do usuario é obrigatório.'});
            }

            const historico = await HistoricoPesquisaRepository.findAllByUserId(userId);
            res.json(historico);
        } catch(erro){
            return res.status(500).json({message: 'Erro ao verificar histórico.', erro})
        }
    }

    // Criar histórico
    static async createHistorico(req, res){
        try {

            if(!req.body.id_usuario) {
                return res.status(400).json({ message: 'ID do usuario é obrigatórios.' });
            }

            if(!req.body) {
                return res.status(400).json({ message: 'Nenhum dado para criação do histórico.' });
            }

            const createHistorico = await HistoricoPesquisaRepository.create(req.body);
            return res.status(201).json({ message: 'Historico realizado com sucesso', createHistorico });
        } catch (erro) {
            return res.status(500).json({ message: 'Carregamento do histórico falhou.', erro: erro.message });
        }
    }

    static async deleteHistorico(req, res){
        try {
            const deletedHistorico = await HistoricoPesquisaRepository.delete(req.params.id);
    
            if(!deletedHistorico) {
                return res.status(400).json({ message: 'ID do histórico é obrigatório.' });
            }
    
            if (deletedHistorico) {
                res.status(200).json({ message: "Histórico apagado."});
            } else {
                res.status(404).json({ message: "Histórico não encontrado." })
            }
        } catch (error) {
            return res.status(404).json({ message: "Error: " + error.message });
        }
    }
}

module.exports = HistoricoPesquisaController;