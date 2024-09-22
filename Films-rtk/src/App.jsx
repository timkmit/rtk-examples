import './App.css'
import FavoriteMoviesList from './components/MovieList'
import MovieInput from './components/MovieMount'

function App() {


  return (
    <>
      <div>
        <h1>Мои избранные фильмы</h1>
        <MovieInput />
        <FavoriteMoviesList />
      </div>
    </>
  )
}

export default App
