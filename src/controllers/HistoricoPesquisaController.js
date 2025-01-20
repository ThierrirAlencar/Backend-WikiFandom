const HistoricoPesquisaRepository = require('../models/HistoricoPesquisaRepository.js');
class HistoricoPesquisaController{
    // Verificar todo o histórico
    static async getAllHistorico(req, res){
        try{
            const userId = req.user.id;
            const historico = await HistoricoPesquisaRepository.findAllByUserId(userId);
            res.json(historico);
        } catch(erro){
            return res.status(500).json({message: 'Erro ao verificar histórico.', erro})
        }
    }

    // Criar histórico
    static async createHistorico(req, res){
        try{
            const createHistorico = await HistoricoPesquisaRepository.create({data});
            return res.status(201).json({ message: 'Historico realizado com sucesso', createHistorico });
        } catch(erro){
            return res.status(500).json({message: 'Carregamento do histórico falhou.', erro})
        }
    }
}

module.exports = HistoricoPesquisaController;