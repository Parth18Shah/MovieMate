// call trending movies and shows when the page loads
// if home page then call trending movies and shows
// console.log(window.location.pathname);
if (window.location.pathname == '/frontend/static/index.html' || window.location.pathname == '/') {
    try {
        document.addEventListener('DOMContentLoaded', async () => {
                try {
                    const trendingMovies = await axios.get('http://localhost:8080/trendingMovies');
                    const trendingShows = await axios.get('http://localhost:8080/trendingShows');
                    const trendingMoviesData = trendingMovies.data.results;
                    const trendingShowsData = trendingShows.data.results;
                    console.log(trendingMoviesData);
                    console.log(trendingShowsData);
                    // const trendingMoviesData = trendingMovies.data.results;
                }   catch (err) {
                    console.log(err);
                }
            });
    }   catch (err) {
        console.log(err);
    }
}


// document.addEventListener('DOMContentLoaded', async () => {
//     try {
//         const trendingMovies = await axios.get('http://localhost:8080/trendingMovies');
//         const trendingShows = await axios.get('http://localhost:8080/trendingShows');
//         const trendingMoviesData = trendingMovies.data.results;
//         const trendingShowsData = trendingShows.data.results;
//         console.log(trendingMoviesData);
//         console.log(trendingShowsData);
//         // const trendingMoviesData = trendingMovies.data.results;
//     }   catch (err) {
//         console.log(err);
//     }
// });


const searchForm = document.querySelector('#search-form');
if (searchForm) {
searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchInput = document.querySelector('#search-input').value;
    const type = document.querySelector('#type').value;
    if(type == 'movie') {
        try {
            const searchResults = await axios.get('http://localhost:8080/searchMovies', { params: { query: searchInput } });
            const searchResultsData = searchResults.data.results;
            console.log(searchResultsData);
        }   catch (err) {
            console.log(err);
        }
    }
    else if(type == 'show') {
        try {
            const searchResults = await axios.get('http://localhost:8080/searchShows', { params: { query: searchInput } });
            const searchResultsData = searchResults.data.results;
            console.log(searchResultsData);
        }   catch (err) {
            console.log(err);
        }
    }
});}
