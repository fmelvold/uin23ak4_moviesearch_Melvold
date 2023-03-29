import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

//Lager en forside der James Bond filmene er hentet inn:
export default function FrontPage() {
  const [movies, setMovies] = useState([]);

//Henter apiet, bruker $page for å unngå duplikater av filmene
  const getMovies = async (page) => {
    const response = await fetch(`http://www.omdbapi.com/?s=james-bond&apikey=dbc617cd&type=movie&page=${page}`);
    const data = await response.json();
    return data.Search;
  }
 
  //kilde: https://ultimatecourses.com/blog/using-async-await-inside-react-use-effect-hook
  //Henter filmene fra James Bond apiet
    useEffect(() => {
    const fetchMovies = async () => {
    const movies = await getMovies();
    setMovies(movies);
    }
//Kjører funksjonen når komponente rendres
    fetchMovies();
  }, []);

  //Maper ut en array for hver movie ved hjelp fra MovieCard
  return (
      <div className="moviecards">
        {movies.map(movie => (
          <MovieCard movie={movie} />
        ))}
      </div>
  );
}

