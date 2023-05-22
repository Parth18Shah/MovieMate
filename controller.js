const { API_KEY } = require('./constants')
const axios = require('axios');
const paginate = require('paginate');
const { format } = require('path');
const { formatReviewsData } = require('./utils');
var searchData = null;
let keywords = '';
module.exports = {
    // searchMovies: (req, res) => {
    //     console.log(req.query);
    //     // get searchInput from the query string
    //     const { query } = req.query;
    //     console.log(query);
        
    // },
    // searchShows: (req, res) => {
    //     console.log(req.query);
    //     // get searchInput from the query string
    //     const { query } = req.query;
    //     console.log(query);
    // },
    search: (req, res) =>  {
        keywords = req.query.keywords.split(" ").join("%20");
        var type = req.query.type;
        const currentPage = parseInt(req.query.page) || 1;
        // console.log(req.query.page);
        const itemsPerPage = 12;
        if (type == "movie") {
            var url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${keywords}&include_adult=true&language=en-US&page=1`
        } else {
            var url = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${keywords}&include_adult=true&language=en-US&page=1`
        }
        axios.get(url)
            .then(response => {
                console.log("type", type);
                res.render('search', { searchData: response.data.results, type});
            })
            .catch(err => {
                console.log(err);
            });
    },
    searchForm: (req, res) => {
        res.render('search', { searchData }); 
    },
    details: async (req, res) => {
        var id = req.params.id;
        var type = req.params.type;
        if (type == "movie") {
            try {
                const [response1, response2, response3] = await Promise.all([
                    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`),
                    axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`),
                    axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
                ]);
                    const formattedReviewsData = formatReviewsData(response3.data.results);
                    console.log("formattedReviewsData", formattedReviewsData[0]);
                    // console.log("response3.data", response3.data.results.length);
                    res.render('details', { detailsData: response1.data, recommendationData: response2.data.results, reviewsData: formattedReviewsData, type, keywords });
            }catch (err) {
                console.log(err);
            }
            // var url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
        }
        else {
            try {
                // var url = `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US`
                const [response1, response2, response3] = await Promise.all([
                    axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US`),
                    axios.get(`https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`),
                    axios.get(`https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
                ]);
                const formattedReviewsData = formatReviewsData(response3.data.results);
                res.render('details', { detailsData: response1.data, recommendationData: response2.data.results, reviewsData: formattedReviewsData, type, keywords });
            } catch (err) {
                console.log(err);
            }

        }
        // axios.get(url)
        //     .then(response => {
        //         // res.header("Access-Control-Allow-Origin", "*");
        //         console.log("response.data", response.data);
        //         // res.send(response.data)
        //         res.render('details', { detailsData: response.data, type, keywords });
        //     })
        //     .catch(err => {
        //         console.log("hi",err);
        //     });
    },
    favorites: (req, res) => {
        res.render('favorites');
    },
    getTrending: async (req, res) => {
        try{
            const [response1, response2, response3, response4, response5, response6 ,response7] = await Promise.all([
                axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`), // trending movies
                axios.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`), // trending shows
                axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`), // upcoming movies
                axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`), // popular movies
                axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`), // popular shows
                axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`), // top rated movies
                axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`), // top rated shows
            ]);
            // console.log("response1.data", response1.data.results[0])
            // console.log("response2.data", response2.data.results[0])
            res.render('index', { trendingMoviesData: response1.data.results, trendingShowsData: response2.data.results, upcomingMoviesData: response3.data.results, popularMoviesData: response4.data.results, popularShowsData: response5.data.results, topRatedMoviesData: response6.data.results, topRatedShowsData: response7.data.results });
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
