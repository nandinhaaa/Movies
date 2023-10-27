import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"; //permite buscar os dados pela API
import MovieCard from "../components/MovieCard"; // filme individualmente

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

import "./MoviesGrid.css";

const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]); //começa com array vazio
  const query = searchParams.get("q"); //pegar qualquer parametro

  const getSearchedMovies = async (url) => { 
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  useEffect(() => { 
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
    getSearchedMovies(searchWithQueryURL); 
  }, [query]); //sempre que mudar o querry ele atualiza a pági o UseEffect

  return (
    <div className="container">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      <div className="movies-container">
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Search;