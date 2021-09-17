import React from 'react'
import { Switch, Route } from 'react-router'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import InTheaters from './pages/InTheaters'
import MostPopular from './pages/MostPopular'
import TopRated from './pages/TopRated'
import MovieGenre from './pages/MovieGenre'
import MovieGenres from './pages/MovieGenres'
import MovieDetails from './pages/MovieDetails'
import ActorDetails from './pages/ActorDetails'
import NotFound from './pages/NotFound'

function App() {

  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/in-theaters" component={InTheaters} />
        <Route path="/most-popular" component={MostPopular} />
        <Route path="/top-rated" component={TopRated} />
        <Route path="/movie-genres/:genreName/:genreId" component={MovieGenre} />
        <Route path="/movie-genres" component={MovieGenres} />
        <Route path="/movie-details/:movieId" component={MovieDetails} />
        <Route path="/actor-details/:actorId" component={ActorDetails} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default App
