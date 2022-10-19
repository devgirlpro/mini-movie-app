import './App.css';
import { useEffect, useState } from 'react';

  // Here is myr key: 28a35669
  const API_URL = "http://www.omdbapi.com?apikey=28a35669";

  const movieDetails = {
    "Title": "Italian Spiderman",
    "Year": "2007",
    "imdbID": "tt2705436",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
}



function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

const searchMovie = (title) => {
  fetch(`${API_URL}&s=${title}`)
  .then(response => {
    if(response.ok) {
      return response.json()
    }
    throw response
  })
  .then(data => {
      setData(data)
      console.log(data)
  })
  .catch(error => {
    console.error("error fetching data", error);
    setError(error)
  })
  .finally(() => {
    setLoading(false)
  })
}

useEffect(() => {
  searchMovie("Spiderman");

}, []);

//get static movi data
  return (
    <div className="App">
    <h1>MovieLand</h1>

    <div className='search'>
      <input
      placeholder="Search for movies"
      type="text"
      // value={}
      onChange={() => {

      }}

      />
      <img 
      src={SearchIcon}
      alt="search"
      onClick={() => {

      }}
      />
    </div> 

    <div className='container'>
      <div className='movie'>
        <p>{movieDetails.Title}</p>
        <p>{movieDetails.Year}</p>
        <span>{movieDetails.Type}</span>
        <img  src={movieDetails.Poster !== 'N/A' ? movieDetails.Poster : 'https://via.placeholder.com/400'} alt={movieDetails.Title}/>
      </div> 
    </div> 


  </div> 
  );
}

export default App;

