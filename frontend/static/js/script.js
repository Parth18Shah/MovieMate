// call trending movies and shows when the page loads
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const trendingMovies = await axios.get('http://localhost:8080/trendingMovies');
        const trendingShows = await axios.get('http://localhost:8080/trendingShows');
        const trendingMoviesData = trendingMovies.data.results;
        const trendingShowsData = trendingShows.data.results;
        // const trendingMoviesData = trendingMovies.data.results;
    }   catch (err) {
        console.log(err);
    }
});


const searchForm = document.querySelector('#search-form');
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
});
