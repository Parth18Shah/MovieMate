const { API_KEY } = require('./constants')
const axios = require('axios');

module.exports = {
    searchMovies: (req, res) => {
        console.log(req.query);
        // get searchInput from the query string
        const { query } = req.query;
        console.log(query);
        
    },
    searchShows: (req, res) => {
        console.log(req.query);
        // get searchInput from the query string
        const { query } = req.query;
        console.log(query);
    },
    search: async (req, res) => {
        console.log(req.query);
        const { query } = req.query;
        console.log(query);
    },
    getTrending: async (req, res) => {
        console.log("getTrendingMovies");
        try{
            const [response1, response2] = await Promise.all([
                axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`),
                axios.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`)
            ]);
            console.log("response1.data", response1.data.results[0])
            console.log("response2.data", response2.data.results[0])
            res.render('index', { trendingMoviesData: response1.data.results, trendingShowsData: response2.data.results });
        } catch (err) {
            console.log(err);
        }
        // var url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
        // var url = `https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`
        // axios.get(url)
        //     .then(response => {
        //         // console.log("response.data", response.data.results);
        //         res.header("Access-Control-Allow-Origin", "*");
        //         // console.log("response.data", response.data.results);
        //         // render the index.ejs file
        //         res.render('index', { trendingMoviesData: response.data.results });
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });
    },
    getTrendingShows: (req, res) => {
        var url = `https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`
        axios.get(url)
            .then(response => {
                res.header("Access-Control-Allow-Origin", "*");
                // res.send(response.data.results)
                res.render('index', { trendingShowsData: response.data.results });
            })
            .catch(err => {
                console.log(err);
            });
    }
};
