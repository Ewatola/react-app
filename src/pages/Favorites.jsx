import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../component/MovieCard"

function Favorites() {
    const {favorites} =useMovieContext();
    
    if (favorites) {
        return (
            <div className="favorites">
                <h2>Your Favorites</h2>
        <div className="movie-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
        </div>
        );
    }

    return <div className="favorites-empty">
        <h2>No favorite Movie Yet</h2>
        <p>Add Favorites</p>
    </div>
}

export default Favorites