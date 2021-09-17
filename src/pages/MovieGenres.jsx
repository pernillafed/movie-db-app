import React from 'react';
import { Container } from 'react-bootstrap';
import MovieGenreList from '../components/MovieGenreList';

const MovieGenres = () => {

    return (
        <Container className="my-4">
            <h1 className="display-3 text-center">Movie genres</h1>
            <MovieGenreList />
        </Container>
    );
}
 
export default MovieGenres;