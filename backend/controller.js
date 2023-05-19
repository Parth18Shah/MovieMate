const { API_KEY } = require('./constants')
const axios = require('axios');

module.exports = {
    searchMovies: (req, res) => {
        console.log(req.query);
        // get searchInput from the query string
        const { query } = req.query;
        
        
    },
    getTrendingMovies: (req, res) => {
        console.log(req.query);
        console.log(API_KEY);
        var url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
        axios.get(url)
            .then(response => {
                // console.log("response.data", response.data.results);
                res.header("Access-Control-Allow-Origin", "*");
                res.send(response.data.results)
            })
            .catch(err => {
                console.log(err);
            });
    },
    getTrendingShows: (req, res) => {
        console.log(req.query);
        var url = `https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`
        axios.get(url)
            .then(response => {
                res.header("Access-Control-Allow-Origin", "*");
                res.send(response.data.results)
            })
            .catch(err => {
                console.log(err);
            });
    }
};
