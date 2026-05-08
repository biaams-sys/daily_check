const prisma = require("../data/prisma");

const cadastrar = async (req, res) => {
    try {
        const data = req.body;

        data.dataInicio = new Date(data.dataInicio);
        data.dataFim = new Date(data.dataFim);

        const item = await prisma.tarefas.create({
            data
        });

        res.status(201).json(item);

    } catch (error) {
        res.status(500).json({
            erro: error.message
        });
    }
};

const listar = async (req, res) => {
    const lista = await prisma.tarefas.findMany();

    res.json(lista).status(200).end();
};

const buscar = async (req, res) => {
    const { id } = req.params;
    
    const item = await prisma.tarefas.findUnique({
        where: { id : Number(id) }
    });

    res.json(item).status(200).end();
};

const atualizar = async (req, res) => {
    const { id } = req.params;
    const dados = req.body;
    
    const item = await prisma.tarefas.update({
        where: { id : Number(id) },
        data: dados
    });

    res.json(item).status(200).end();
};

const excluir = async (req, res) => {
    const { id } = req.params;
    
    const item = await prisma.tarefas.delete({
        where: { id : Number(id) }
    });

    res.json(item).status(200).end();
};

module.exports = {
    cadastrar,
    listar,
    buscar,
    atualizar,
    excluir
}
