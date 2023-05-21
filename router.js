var express = require('express');
var router = express.Router();
var controller = require('./controller');

// router.get('/searchMovies', controller.searchMovies);
// router.get('/searchShows', controller.searchShows);
router.get('/details/:type/:id', controller.details);
router.get('/', controller.getTrending);
router.get('/search', controller.search);
router.get('/searchForm', controller.searchForm);
router.get('/favorites', controller.favorites);

module.exports = router;