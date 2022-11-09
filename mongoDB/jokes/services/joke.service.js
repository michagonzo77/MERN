const {Joke} = require("../models/joke.model");

const createJoke = async (data) => {
    console.log("service: createJoke");
    const joke = await Joke.create(data);
    return joke;
}

const getAllJokes = async () => {
    console.log("service: getAllJokes");
    const jokes = await Joke.find();
    return jokes;
}

const getJokeById = async (id) => {
    console.log("service: getJokeById");
    const joke = await Joke.findById(id);
    return joke;
}

const deleteJokeById = async (id) => {
    console.log("service: deleteJokeById");
    const joke = await Joke.findByIdAndDelete(id);
    return joke;
}

const getJokeByIdAndUpdate = async (id, data) => {
    console.log("service: getJokeByIdAndUpdate");
    const joke = await Joke.findByIdAndUpdate(id,data, {
        //  Re-run validators upon update.
        runValidators: true,
        // Return the updated joke.
        new: true
    });
    return joke;
}

const getRandomJoke = async () => {
    console.log("service: getRandomJoke");
    const allJokes = await Joke.find()
    const randomIdx = Math.floor(Math.random() * allJokes.length);
    return allJokes[randomIdx];
}


module.exports = {
    createJoke: createJoke,
    getAllJokes,
    getJokeById,
    deleteJokeById,
    getJokeByIdAndUpdate,
    getRandomJoke
};