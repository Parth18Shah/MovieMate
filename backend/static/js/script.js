// // call trending movies and shows when the page loads
// // if home page then call trending movies and shows
// // console.log(window.location.pathname, window.location.pathname.split('/'));
// // if (window.location.pathname.split('/')[1] === 'details') {
// //     console.log("details page");
// // }
// if (window.location.pathname.split('/')[1] === 'details') {
//     type = window.location.pathname.split('/')[2];
//     id = window.location.pathname.split('/')[3];
//     function checkFavorite (type, id) {
//         // Get the existing favorites from local storage (if any)
//         let favorites = JSON.parse(localStorage.getItem('favorites')) || { movies: [], shows: [] };

//         // Check if the movie/show is present in the respective section (movies or shows) based on the type
//         if (type === 'movie') {
//             return favorites.movies.some(movie => movie.id === id);
//         } else if (type === 'show') {
//             return favorites.shows.some(show => show.id === id);
//         }
//     }
//     function addToFavorites (type, id) {
//         // Create an object or array with the necessary details
//         let favorite = {};
//         if (type === 'movie') {
//             favorite = {
//                 title: '<%= detailsData.title %>',
//                 id: '<%= detailsData.id %>',
//                 poster: '<%= detailsData.poster_path %>',
//                 type: type,
//             };
//         } else if (type === 'show') {
//             favorite = {
//                 title: '<%= detailsData.name %>',
//                 id: '<%= detailsData.id %>',
//                 poster: '<%= detailsData.poster_path %>',
//                 type: type,
//             };
//         }
    
//         // Get the existing favorites from local storage (if any)
//         let favorites = JSON.parse(localStorage.getItem('favorites')) || { movies: [], shows: [] };
    
//         // Push the favorite object to the respective section (movies or shows) based on the type
//         if (favorite.type === 'movie') {
//           favorites.movies.push(favorite);
//         } else if (favorite.type === 'show') {
//           favorites.shows.push(favorite);
//         }
    
//         // Save the updated favorites back to local storage
//         localStorage.setItem('favorites', JSON.stringify(favorites));
//     }
//     // const id = window.location.pathname.split('/')[3];
//     // console.log("id", id);
//     // Call the checkFavorite function and store the result in a variable
//     const isFavorite = checkFavorite(type, id);
//     console.log("isFavorite", isFavorite);
//     // Update the button based on the result
//     if (isFavorite) {
//     document.getElementById('remove-from-favorites').style.display = 'inline-block';
//     document.getElementById('add-to-favorites').style.display = 'none';
//     } else {
//     document.getElementById('remove-from-favorites').style.display = 'none';
//     document.getElementById('add-to-favorites').style.display = 'inline-block';
//     }

//     document.getElementById('add-to-favorites').addEventListener('click', function() {
//         // Create an object or array with the necessary details
//         var type = '<%= type %>';
//         let favorite = {};
//         if (type === 'movie') {
//             favorite = {
//                 title: '<%= detailsData.title %>',
//                 id: '<%= detailsData.id %>',
//                 poster: '<%= detailsData.poster_path %>',
//                 type: type,
//             };
//         } else if (type === 'show') {
//             favorite = {
//                 title: '<%= detailsData.name %>',
//                 id: '<%= detailsData.id %>',
//                 poster: '<%= detailsData.poster_path %>',
//                 type: type,
//             };
//         }
    
//         // Get the existing favorites from local storage (if any)
//         let favorites = JSON.parse(localStorage.getItem('favorites')) || { movies: [], shows: [] };
    
//         // Push the favorite object to the respective section (movies or shows) based on the type
//         if (favorite.type === 'movie') {
//           favorites.movies.push(favorite);
//         } else if (favorite.type === 'show') {
//           favorites.shows.push(favorite);
//         }
    
//         // Update the favorites in the local storage
//         localStorage.setItem('favorites', JSON.stringify(favorites));
//     });
    
//     document.getElementById('remove-from-favorites').addEventListener('click', function() {
//         // Get the existing favorites from local storage (if any)
//         let favorites = JSON.parse(localStorage.getItem('favorites')) || { movies: [], shows: [] };
    
//         // Get the id of the movie/show to be removed from the URL
//         let id = window.location.pathname.split('/')[2];
    
//         // Remove the movie/show from the respective section (movies or shows) based on the type
//         if (type === 'movie') {
//             favorites.movies = favorites.movies.filter(movie => movie.id !== id);
//         } else if (type === 'show') {
//             favorites.shows = favorites.shows.filter(show => show.id !== id);
//         }
    
//         // Update the favorites in the local storage
//         localStorage.setItem('favorites', JSON.stringify(favorites));
//     });
// }






