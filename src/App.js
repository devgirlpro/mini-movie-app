import './App.css';
import { useEffect, useState } from 'react';

  // Here is myr key: 28a35669
  const API_URL = "http://www.omdbapi.com?apikey=28a35669";

function App() {




const searchMovie = async (title) => {
  const response = await fetch(`${API_URL}&s=${title}`);
  const data = await response.json();

  console.log(data);

}

useEffect(() => {
  searchMovie("Spiderman");

}, []);



  return (
    <div className="App">
      <h1>React App</h1>
    </div>
  );
}

export default App;
