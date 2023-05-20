var express = require('express');
var router = express.Router();
var controller = require('./controller');

router.get('/searchMovies', controller.searchMovies);
router.get('/searchShows', controller.searchShows);
router.get('/', controller.getTrending);
router.get('/search', controller.search);

module.exports = router;