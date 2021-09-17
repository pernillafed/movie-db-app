import React from 'react';
import { Row, Col, Alert } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { getActorMovies } from '../services/API';

const ActorMoviesList = ({ actorId }) => {

    // Gives us a list with 20 of the actors most popular movies
    const { data, error, isError, isLoading } = useQuery(['actor-movies', actorId], () => getActorMovies(actorId));

    return (
        <Row className="justify-content-center">
            {isLoading && <p className="loading">Loading...</p>}
            {isError && <Alert variant="danger" className="fs-4 text-center">{error.message}</Alert>}
            {/* Renders movie list in a grid system */}
            {data?.results && data.results.map(movie => (
                <Col key={movie.id} xs={6} sm={4} md={3} className="my-3 d-flex justify-content-center">
                    <Link to={`/movie-details/${movie.id}`} style={{color: '#EEE', textDecoration: 'none', width: '145px', height: '215px'}}>
                        {movie.poster_path ? (
                            <img className="w-100 rounded-3 shadow hover-shadow" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
                        ) : (
                            <div className="bg-dark d-flex justify-content-center align-items-center rounded-3 shadow p-3 hover-shadow" style={{width: '100%', height: '100%'}}>
                                <p className="text-center fw-bold">{movie.title}</p>
                            </div>
                        )}
                    </Link>
                </Col>
            ))}
        </Row>
    );
}
 
export default ActorMoviesList;