import React from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { getMovieGenres } from '../services/API';
import MovieGenreCard from './MovieGenreCard';

const MovieGenreList = () => {

    // Gives us a list of ALL movie genres available
    const { data, error, isError, isLoading } = useQuery('genres', getMovieGenres);

    return (
        <Container className="my-4">
            <Row className="justify-content-center mx-auto" style={{maxWidth: '700px'}}>
            {isLoading && <p className="loading">Loading...</p>}
            {isError && <Alert variant="danger" className="fs-4 text-center">{error.message}</Alert>}
            {/* Renders a list of genres with MovieGenreCard components */}
            {data?.genres && data.genres.map(genre => (
                <Col key={genre.id} xs={12} md={6} className="px-2">
                    <MovieGenreCard genre={genre} />
                </Col>
            ))}
            </Row>
        </Container>
    );
}
 
export default MovieGenreList;