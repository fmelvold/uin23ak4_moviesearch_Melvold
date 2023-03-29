export default function MovieCard({movie}) {
  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} />
      <h2>{movie.Title}</h2>
      <p>{movie.Year}</p>
    </div>
  );
}

//Brukte Postman for å finne ut av hva jeg ønsket å inkludrere: https://www.postman.com/