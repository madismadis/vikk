// Ex 1

const movieData = require('./moviedata.json')
// console.log('moviedata', moviedata);

//konventeerime stringid numbriks
movieData.map(movies=>{
    movies.Year=+movies.Year
    movies.imdbRating = +movies.imdbRating
    movies.imdbVotes = +(movies.imdbVotes.replace(/,/g, ''))
    movies.Actors = movies.Actors.split(', ')
    
})

console.log("--- EX1 ---")
// Find and log out all movies that are released between 1962 and 1972

// function getMoviesInRange(start, end){
//     return movieData.filter((movies) => {
//         return movies.Year >= start && movies.Year <= end
//     })
// }
//   console.log(getMoviesInRange('1962', '1972'))

const moviesInRange = movieData.filter(movies => {
    if (movies.Year >= 1962 && movies.Year <= 1972) {
      return movies
    }
})

//console.log(moviesInRange);

    // From those find movie, that has best imdb rating and movie that has been rated most
//reduce funktsioon parima leidmiseks
    function findBestRating(array) {
        return array.reduce((previousValue, currentValue) => {
          if (previousValue.imdbRating > currentValue.imdbRating) {
            return previousValue 
          } else {
            return currentValue
          }
        })
      }
    const bestRating = findBestRating(moviesInRange)
    //console.log(bestRating);

    //movie that has been rated most

      function findMostRated(array)       {
        return array.reduce((previousValue, currentValue) => {
          if (previousValue.imdbVotes> currentValue.imdbVotes) {
            return previousValue 
          } else {
            return currentValue
          }
        })
      }
      const mostRated = findMostRated(moviesInRange)
//console.log(mostRated);
//console.log();

// Log out "Best rated movie is movie name, directed by movie director and was released
// in release date - day, month, year."

console.log('Best rated movie is', bestRating.Title, 'directed by', bestRating.Director, 'and was released in', bestRating.Released +'.')

// Log out "Most rated movie is movie name, directed by movie director and was released
// in release date - day, month, year."

console.log('Most rated movie is', mostRated.Title, 'directed by', mostRated.Director, 'and was released in', mostRated.Released +'.');

console.log();
console.log("--- EX 2 ---");

// Find all movies, where genre includes Drama

const dramas = movieData.filter(movies => {
  if (movies.Genre.includes('Drama')){
    return movies
  }
})
    //console.log(dramas);

    // From those find movie, that has best imdb rating 
    function findBestRating(array) {
      return array.reduce((previousValue, currentValue) => {
        if (previousValue.imdbRating > currentValue.imdbRating) {
          return previousValue 
        } else {
          return currentValue
        }
      })
    }
  const bestRatingDrama = findBestRating(dramas)
  //console.log(bestRatingDrama);

  //movie that has been rated most

    function findMostRatedDrama(array)       {
      return array.reduce((previousValue, currentValue) => {
        if (previousValue.imdbVotes> currentValue.imdbVotes) {
          return previousValue 
        } else {
          return currentValue
        }
      })
    }
    const mostRatedDrama = findMostRatedDrama(dramas)

    //console.log(mostRatedDrama);

    // Log out "Best rated drama is movie name, directed by movie director and was released in release date - day, month, year."
    console.log('Best rated drama is', bestRatingDrama.Title, 'directed by', bestRatingDrama.Director, 'and was released in', bestRatingDrama.Released +'.')

    // Log out "Most rated drama is movie name, directed by movie director and was released in release date - day, month, year."
    console.log('Most rated movie is', mostRatedDrama.Title, 'directed by', mostRatedDrama.Director, 'and was released in', mostRatedDrama.Released +'.');

    console.log();
    console.log("--- EX 3 --- ");

// Find all movies, that are rated R

const ratedR = movieData.filter(movies => {
  if (movies.Rated ==='R'){
    return movies
  }
})
// console.log(ratedR);

// Log out "Movies that are rated R are: movie names separated by comma."

const ratedRTitles = ratedR.map(movie => {
  return movie.Title
})

 console.log("Movies that are rated R are: "+ratedRTitles.join(", ")+".");

  // Make list of all actors, that have made rated R movie. Do not repeat one actor multiple times!


let actors = []
ratedR.map(movies => {
   movies.Actors.map(actor => {
    actors.push(actor)
  })
})
  // console.log(actors);

  let uniqueActors =[...new Set(actors)]
    console.log(uniqueActors)

    // Log out "Actors that played in those movies: names separated by comma"

    console.log("Actors that played in those movies: "+uniqueActors.join(", ")+".");