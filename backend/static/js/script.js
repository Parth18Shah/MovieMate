// call trending movies and shows when the page loads
// if home page then call trending movies and shows
console.log(window.location.pathname);
// if (window.location.pathname == '/backend/static/index.html' || window.location.pathname == '/') {
//     try {
//         console.log('hello');
//         document.addEventListener('DOMContentLoaded', async () => {
//                 try {
//                     console.log('hello1');
                    // const trendingMovies = await axios.get('http://localhost:8080/trendingMovies');
                    // await axios.get('http://localhost:8080/trendingMovies');
                    // await axios.get('http://localhost:8080/trendingShows');
                    // const trendingMoviesData = trendingMovies.data;
                    // const trendingShowsData = trendingShows.data;
                    // console.log(trendingMoviesData);
                    // console.log(trendingShowsData);
                    // renderMovieCards(trendingMoviesData);
                    // const carouselContainer = document.getElementById('trending-movies-carousel');

                    // trendingMoviesData.forEach((movie) => {
                    // const movieCard = createMovieCard(movie);
                    // carouselContainer.appendChild(movieCard);
                    // });

                    // const prevBtn = document.getElementById('prev-btn');
                    // const nextBtn = document.getElementById('next-btn');

                    // prevBtn.addEventListener('click', () => {
                    // carouselContainer.scrollBy({ left: -200, behavior: 'smooth' });
                    // });

                    // nextBtn.addEventListener('click', () => {
                    // carouselContainer.scrollBy({ left: 200, behavior: 'smooth' });
                    // });
                    // const carouselWrapper = document.getElementById('trending-movies-carousel');
                    // const swiperWrapper = document.createElement('div');
                    // swiperWrapper.classList.add('swiper-wrapper');

                    // trendingMoviesData.forEach((movie) => {
                    // const movieCard = createMovieCard(movie);
                    // swiperWrapper.appendChild(movieCard);
                    // });

                    // carouselWrapper.appendChild(swiperWrapper);

                    // // Initialize the Swiper carousel
                    // new Swiper('.swiper-container', {
                    // slidesPerView: 'auto',
                    // spaceBetween: 16,
                    // pagination: {
                    //     el: '.swiper-pagination',
                    //     clickable: true,
                    // },
                    // });
//                 }   catch (err) {
//                     console.log(err);
//                 }
//             });
//     }   catch (err) {
//         console.log(err);
//     }
// }

// function renderMovieCards(trendingMoviesData){
//     const carouselContainer = document.getElementById('trending-movies-carousel');
//     trendingMoviesData.forEach((movie) => {

// }
// function createMovieCard(movie) {
//     const { title, poster, releaseDate } = movie;
  
//     const card = document.createElement('div');
//     card.classList.add('swiper-slide', 'card');
  
//     const img = document.createElement('img');
//     img.classList.add('card-img-top');
//     img.src = poster;
//     img.alt = title;
  
//     const cardBody = document.createElement('div');
//     cardBody.classList.add('card-body');
  
//     const titleElement = document.createElement('h5');
//     titleElement.classList.add('card-title');
//     titleElement.textContent = title;
  
//     const releaseDateElement = document.createElement('p');
//     releaseDateElement.classList.add('card-text');
//     releaseDateElement.textContent = `Release Date: ${releaseDate}`;
  
//     cardBody.appendChild(titleElement);
//     cardBody.appendChild(releaseDateElement);
//     card.appendChild(img);
//     card.appendChild(cardBody);
  
//     return card;
//   }

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

// function createMovieCard(movie) {
//     const { title, poster, releaseDate } = movie;
  
//     const card = document.createElement('div');
//     card.classList.add('card');
  
//     const img = document.createElement('img');
//     img.classList.add('card-img-top');
//     img.src = poster;
//     img.alt = title;
  
//     const cardBody = document.createElement('div');
//     cardBody.classList.add('card-body');
  
//     const titleElement = document.createElement('h5');
//     titleElement.classList.add('card-title');
//     titleElement.textContent = title;
  
//     const releaseDateElement = document.createElement('p');
//     releaseDateElement.classList.add('card-text');
//     releaseDateElement.textContent = `Release Date: ${releaseDate}`;
  
//     cardBody.appendChild(titleElement);
//     cardBody.appendChild(releaseDateElement);
//     card.appendChild(img);
//     card.appendChild(cardBody);
  
//     return card;
// }

// const searchForm = document.querySelector('#search-form');
// if (searchForm) {
// searchForm.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const searchInput = document.querySelector('#search-input').value;
//     const type = document.querySelector('#type').value;
//     if(type == 'movie') {
//         try {
//             const searchResults = await axios.get('http://localhost:8080/searchMovies', { params: { query: searchInput } });
//             const searchResultsData = searchResults.data.results;
//             console.log(searchResultsData);
//         }   catch (err) {
//             console.log(err);
//         }
//     }
//     else if(type == 'show') {
//         try {
//             const searchResults = await axios.get('http://localhost:8080/searchShows', { params: { query: searchInput } });
//             const searchResultsData = searchResults.data.results;
//             console.log(searchResultsData);
//         }   catch (err) {
//             console.log(err);
//         }
//     }
// });}
