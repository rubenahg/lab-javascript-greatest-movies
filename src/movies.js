// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directorsSet = moviesArray.map(movie => movie.director);
    let uniqueDirectors = [...new Set(directorsSet)];
    return uniqueDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let movieCounter = 0;
    moviesArray.filter(movie => {
        if(movie.director == "Steven Spielberg" && movie.genre.includes("Drama")){
            movieCounter++
        }
    })
    return movieCounter
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length < 1){
        return 0;
    } else {
        let sum = moviesArray.reduce((total, movies) => {
            if(typeof movies.score === "number"){
                return total + movies.score
            } else {
                return total;
            }
        }, 0)
        let average = sum / moviesArray.length
        return Number(average.toFixed(2))
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"));
    return scoresAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let sortedByYear = moviesArray.slice(0); //copy the array
    return sortedByYear.sort((a,b)=>{
        if (a.year === b.year){
            let firstTitle = a.title[0].toLowerCase() 
            let secondTitle = b.title[0].toLowerCase()
            return firstTitle > secondTitle ? 1 : firstTitle < secondTitle ? -1 : 0;
        } else {
            return a.year-b.year
        }
    })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let moviesSortedAlphabetic = moviesArray.slice(0);
  moviesSortedAlphabetic.sort((a,b)=>{
      let firstMovieTitle = a.title.toLowerCase() 
      let seconMovieTitle = b.title.toLowerCase()
      return firstMovieTitle > seconMovieTitle ? 1 : firstMovieTitle < seconMovieTitle ? -1 : 0;
  })
  let onlyTwentyMovies = moviesSortedAlphabetic.length > 20 ? moviesSortedAlphabetic.slice(0, 20) : moviesSortedAlphabetic
  let onlyTitle = []
  onlyTwentyMovies.forEach(element => {
    onlyTitle.push(element.title)
  });
  return onlyTitle
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return moviesArray.map(movie => {
        let movieDuration = movie.duration.split(" ")
        let newMovie = {...movie};
        if(movieDuration.length == 2){ // when both hours and min are given
          newMovie.duration = ((Number(movieDuration[0][0])) * 60) + (Number((movieDuration[1][0])+movieDuration[1][1]))
        } else if (movieDuration[0].includes("h")){ // when only hours are given
          newMovie.duration = (Number(movieDuration[0][0])) * 60
        } else { // when only minutes are given
          newMovie.duration = movieDuration.length === 4 ? Number(movieDuration[0][0]) : Number((movieDuration[0][0]+movieDuration[0][1]))
        }
        return newMovie
    });
  }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
