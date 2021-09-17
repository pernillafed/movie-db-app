import React from 'react';
import { Container } from 'react-bootstrap';
import MovieList from '../components/MovieList';

const MostPopular = () => {
    return (
        <Container className="my-4">
            <h1 className="display-3 text-center">Most popular</h1>
            <MovieList category="popular" />
        </Container>
    );
}
 
export default MostPopular;