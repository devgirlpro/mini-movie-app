import React from 'react'

const MoviCard = (props) => {
    console.log(props.movie)
    console.log("hi", props)
  return (
    <div className="movie" key={props.movie.imdbID}>
    <div>
      <p>{props.movie.Year}</p>
    </div>

    <div>
      <img src={props.movie.Poster !== "N/A" ? props.movie.Poster : "https://via.placeholder.com/400"} alt={props.movie.Title} />
    </div>

    <div>
      <span>{props.movie.Type}</span>
      <h3>{props.movie.Title}</h3>
    </div>
  </div>

    // <div className='movie'>
    //       <p>{movieDetails.Title}</p>
    //       <p>{movieDetails.Year}</p>
    //       <span>{movieDetails.Type}</span>
    //       <img  src={movieDetails.Poster !== 'N/A' ? movieDetails.Poster : 'https://via.placeholder.com/400'} alt={movieDetails.Title}/>
    //     </div>
  )
}

export default MoviCard