import {createContext, useState, useContext, useEffect} from "react";

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    const [favorites, setFavotites] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")

        if (storedFavs) setFavotites(JSON.parse(storedFavs))
    }, [])

    useEffect(() =>{
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    const addToFavorites = (movie) =>{
        setFavotites(prev => [...prev, movie])
    }

    const removeFromFavorites = (movieId) =>{
        setFavotites(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavorite = (movieId) => {
         return favorites.some(movie => movie.id === movieId)
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

      return <MovieContext.Provider value={value}>
        {children}
      </MovieContext.Provider>
}