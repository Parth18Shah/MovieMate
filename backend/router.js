var express = require('express');
var router = express.Router();
var controller = require('./controller');

router.get('/searchMovies', controller.searchMovies);
router.get('/searchShows', controller.searchShows);
router.get('/trendingMovies', controller.getTrendingMovies);
router.get('/trendingShows', controller.getTrendingShows);

module.exports = router;