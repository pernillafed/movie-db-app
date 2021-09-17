import React from 'react';
import { Col, Container, Row, Alert } from 'react-bootstrap';
import { getMoviesByCategory } from '../services/API';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

const MovieList = ({ category }) => {

    // Sending in either 'now_playing' (for InTheaters page) or 'popular' (for MostPopular page), gives us a list of 20 movies
    const { data, error, isError, isLoading } = useQuery(['movies', category], () => getMoviesByCategory(category));

    return (
        <Container className="my-3">
            <Row className="justify-content-center mx-auto" style={{maxWidth: '720px'}}>
            {isLoading && <p className="loading">Loading...</p>}
            {isError && <Alert variant="danger" className="fs-4 text-center">{error.message}</Alert>}
            {/* Renders a list of movie posters (or div with movie title) in a grid system */}
            {data?.results && data.results.map(movie => (
                <Col key={movie.id} xs={6} sm={4} md={3} className="my-3 my-lg-4 d-flex justify-content-center">
                    <Link to={`/movie-details/${movie.id}`} style={{color: '#EEE', textDecoration: 'none', width: '151px', height: '210px'}}>
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
        </Container>
    );
}
 
export default MovieList;