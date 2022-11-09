const express = require('express');

const {
    handleCreateJoke,
    handleGetAllJokes,
    handleGetJokeById,
    handleDeleteJokeById,
    handleUpdateJokeById,
    handleGetRandomJoke
} = require('../controllers/joke.controller')

const router = express.Router();

router.post('/', handleCreateJoke);
router.get('/', handleGetAllJokes);
router.get('/random', handleGetRandomJoke)
router.get('/:id', handleGetJokeById);
router.delete('/:id', handleDeleteJokeById);
router.put('/:id', handleUpdateJokeById);

module.exports = {jokeRouter:router};