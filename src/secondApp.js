import './App.css';
import { useEffect, useState } from 'react';

  // Here is myr key: 28a35669
  const API_URL = "http://www.omdbapi.com?apikey=28a35669";

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



  return (
    <div className="App">
      <h1>React App</h1>
    </div>
  );
}

export default App;

