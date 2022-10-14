import React, {useState} from 'react'
import './App.css';

import { addWatchedMovie, add, removeWatchedMovie, getWatchedMovies, getAllMovies } from './index.js';

const getMoviesComponents = (movies) => {
  const components = [];

  // forEach map metoduna deyisdim ve arrow funtiona
  movies.map((movie, index) => {
    // Destruction olundu her defe movie objectinden istifade olunmamasi ucun
    const {image, title, comment} = movie

    components.push(
      // Console-da "key" propsu gonderilmediyi ucun error verird. Array-in indexini key-e elave etdim. Amma daha yaxshi olardi her objectin unique 'id'-si olsun. Index istifade edilmesin.
      <div className="all" key={index}>
        <div>
          <img src={image} height="100px" />
        </div>
        <span>
          {/*onClick arrow function ile evezlendi*/}
          <a className="movie-watched" href="#" onClick={() => {addWatchedMovie(title, comment, image)}}>
            {title}
          </a>
        </span>
        <br />
        <span>
          {comment}
        </span>
        <br />
        <br />
      </div>
    )
  })

  return components;
}

function getWatchedMoviesComponents(movies) {
  var components = [];

  // forEach map metoduna deyisdim ve arrow funtiona
  movies.map((movie, index) => {
    const {image, title, comment} = movie;
    // Console-da "key" propsu gonderilmediyi ucun error verird. Array-in indexini key-e elave etdim. Amma daha yaxshi olardi her objectin unique 'id'-si olsun. Index istifade edilmesin.
    components.push(movie && (
      <div className="watched" key={index}>
        <div>
          <img src={movie.image} height="100px" />
        </div>
        <span>
          <a className="movie-watched" href="#" onClick={function() { removeWatchedMovie(movie.title) }}>
            {movie.title}
          </a>
        </span>
        <br />
        <span>
          {movie.comment}
        </span>
        <br />
        <br />
      </div>
    ))
  })

  return components;
}

// Arrow function ile evezlendi, variable-lar useState deyisdirildi
const App = (props) => {
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [comment, setComment] = useState('')

  return (
    <div className="App">
      <h1>Reactive Movies!</h1>
      <h1>Add movie!</h1>
      <b>TITLE:<br /><input type="text" onChange={(e) => { setTitle(e.target.value) }} /></b><br />
      <b>IMAGE URL:<br /><input type="text" onChange={(e) => { setImage(e.target.value) }} /></b><br />
      <b>COMMENT:<br /><input type="text" onChange={(e) => { setComment(e.target.value) }} /></b><br />
      <input type="button" onClick={(e) => { add(title, image, comment); }} value="ADD MOVIE" />

      <h1>Watchlist:</h1>
      {getMoviesComponents(getAllMovies())}

      <h1>Already watched:</h1>
      {getWatchedMoviesComponents(getWatchedMovies())}
    </div>
  )
}

export default App

