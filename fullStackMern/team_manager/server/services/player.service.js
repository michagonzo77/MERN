const {Player} = require("../models/player.model");

const createPlayer = async (data) => {
    console.log("service: createPlayer");
    const player = await Player.create(data);
    return player;
}

const getAllPlayers = async () => {
    console.log("service: getAllPlayers");
    const players = await Player.find();
    return players;
}

const getPlayerById = async (id) => {
    console.log("service: getPlayerById");
    const player = await Player.findById(id);
    return player;
}

const deletePlayerById = async (id) => {
    console.log("service: deletePlayerById");
    const player = await Player.findByIdAndDelete(id);
    return player;
}

const getPlayerByIdAndUpdate = async (id, data) => {
    console.log("service: getPlayerByIdAndUpdate");
    const player = await Player.findByIdAndUpdate(id,data, {
        //  Re-run validators upon update.
        runValidators: true,
        // Return the updated player.
        new: true
    });
    return player;
}


module.exports = {
    createPlayer: createPlayer,
    getAllPlayers,
    getPlayerById,
    deletePlayerById,
    getPlayerByIdAndUpdate
};