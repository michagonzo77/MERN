const { createPlayer,
    getAllPlayers,
    getPlayerById,
    deletePlayerById,
    getPlayerByIdAndUpdate
} = require('../services/player.service');

const handleCreatePlayer = async (req, res) => {
    console.log('controller: handleCreatePlayer req.body: ', req.body);
    try {
        const player = await createPlayer(req.body);
        return res.json(player)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleGetAllPlayers = async (req, res) => {
    console.log('controller: handleGetAllPlayers');
    try {
        const players = await getAllPlayers();
        return res.json(players)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleGetPlayerById = async (req, res) => {
    console.log('controller: handleGetPlayerById req.params: ', req.params.id);
    try {
        const player = await getPlayerById(req.params.id);
        return res.json(player)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleDeletePlayerById = async (req, res) => {
    console.log('controller: handleDeletePlayerById req.params: ', req.params.id);
    try {
        const player = await deletePlayerById(req.params.id);
        return res.json(player)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleUpdatePlayerById = async (req, res) => {
    console.log('controller: handleUpdatePlayerById req.params: ', req.params.id, "\n req.body: ", req.body);
    try {
        const player = await getPlayerByIdAndUpdate(req.params.id, req.body);
        return res.json(player)
    } catch (error) {
        return res.status(400).json(error);
    }
}

module.exports = {
    handleCreatePlayer: handleCreatePlayer,
    handleGetAllPlayers,
    handleGetPlayerById,
    handleDeletePlayerById,
    handleUpdatePlayerById
};