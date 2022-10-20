import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from "./search.svg";
import MoviCard from './MoviCard';


  // Here is myr key: 28a35669
  const API_URL = "http://www.omdbapi.com?apikey=28a35669";

//   const movieDetails = {
//     "Title": "Italian Spiderman",
//     "Year": "2007",
//     "imdbID": "tt2705436",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
// }

const App = () => {
  const [movies, setMovies] = useState([])
  const [searchTherm, setSearchTherm] = useState('')

const searchMovie = async (title) => {
  const response = await fetch(`${API_URL}&s=${title}`);
  const data = await response.json();

  const moviLiest = data.Search
  console.log(moviLiest)

  setMovies(moviLiest)
}

useEffect(() => {
  searchMovie()
}, []);

  return (
    <div className="App">
      <h1>MovieLand</h1>

      <div className='search'>
        <input
        placeholder="Search for movies"
        type="text"
        value={searchTherm}
        onChange={(e) => {setSearchTherm(e.target.value)
        }}
        />
        <img 
        
        src={SearchIcon}
        alt="search"
        onClick={() => {searchMovie(searchTherm)
        }}
        />
      </div> 

      {movies?.length > 0  
        ? (
            <div className='container'>
              {movies.map((movie) =>(
                  <MoviCard movie={movie} />
              ))}
            
            </div>
          ) : (
          <div className='empty'>
             <h2>No movie found</h2> 
          </div>
        ) 
        }

    </div> 
  );
}

export default App;

