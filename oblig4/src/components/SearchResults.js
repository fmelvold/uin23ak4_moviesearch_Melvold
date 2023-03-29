import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

export default function SearchResults({searchTerm, searchType}) {
  const [movies, setMovies] = useState([]);

  //Siden apiet skal hente noe annet enn James Bond, så må jeg endre på hva som skal hentes i URLen. $ blir brukt i api til propsa, siden det ikke er en fast verdi som skal hentes inn, men en variabel  
  useEffect(() => {
    const getMovies = async () => {
      const API = `http://www.omdbapi.com/?s=${searchTerm}&type=${searchType}&apikey=dbc617cd`;
      const response = await fetch(API);
      const data = await response.json();
      setMovies(data.Search);
    }
  
    //If/else: Hvis searchTerm eksisterer skal getMovies hentes inn, hvis ikke blir det en tom liste
    if (searchTerm) {
      getMovies();
    } else {
      setMovies([]);
    }
  }, [searchTerm, searchType]); //Vil kjøres hver gang verdiene endres, så det vil si at nye verdier blir hentet inn hver gang det skjer en forandring

//Maper ut en array for hver movie ved hjelp fra MovieCard, samme måte som på FrontPage
  return (
      <div className="moviecards">
        {movies?.map(movie => (
          <MovieCard movie={movie} />
        ))}
      </div>
  );
}
