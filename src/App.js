import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from "./search.svg";


  // Here is myr key: 28a35669
  const API_URL = "http://www.omdbapi.com?apikey=28a35669";

function App() {


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
    </div>
  );
}

export default App;
