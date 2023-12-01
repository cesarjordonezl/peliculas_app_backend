const { getAll, create, getOne, remove, update, setDirectorActors, setDirectorGenres } = require('../controllers/director.controllers');
const express = require('express');

const directorRouter = express.Router();

directorRouter.route('/')
    .get(getAll)
    .post(create);

directorRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

directorRouter.route('/:id/actors')
    .post(setSongActors);

directorRouter.route('/:id/genres')
    .post(setSongGenres);

module.exports = directorRouter;