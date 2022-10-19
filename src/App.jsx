import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from "./search.svg";
import MoviCard from './MoviCard';


  // Here is myr key: 28a35669
  const API_URL = "http://www.omdbapi.com?apikey=28a35669";

  const movieDetails = {
    "Title": "Italian Spiderman",
    "Year": "2007",
    "imdbID": "tt2705436",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
}

const App = () => {

const searchMovie = async (title) => {
  const response = await fetch(`${API_URL}&s=${title}`);
  const data = await response.json();

  const moviLiest = data.Search

  console.log(moviLiest)
}

useEffect(() => {
  searchMovie("Spiderman");

}, []);

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
         <MoviCard />
      </div> 


    </div> 
  );
}

export default App;
