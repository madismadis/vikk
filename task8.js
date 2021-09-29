// Ex 1

// Log out "Best rated movie is movie name, directed by movie director and was released
//  in release date - day, month, year."

// Log out "Most rated movie is movie name, directed by movie director and was released
//  in release date - day, month, year."

const moviedata = require('./moviedata.json')
// console.log('moviedata', moviedata);

console.log("EX1")
// Find and log out all movies that are released between 1962 and 1972

function getMoviesInRange(start, end){
    return moviedata.filter((movies) => {
        return movies.Year >= start && movies.Year <= end
    })
}
  console.log(getMoviesInRange('1962', '1972'))
  
  
  // From those find movie, that has best imdb rating and mobie that has been rated most


    