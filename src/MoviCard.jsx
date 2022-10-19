import React from 'react'

function MoviCard(props) {
  return (
    <div className="movie" key={props.imdbID}>
    <div>
      <p>{props.Year}</p>
    </div>

    <div>
      <img src={props.Poster !== "N/A" ? props.Poster : "https://via.placeholder.com/400"} alt={props.Title} />
    </div>

    <div>
      <span>{props.Type}</span>
      <h3>{props.Title}</h3>
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