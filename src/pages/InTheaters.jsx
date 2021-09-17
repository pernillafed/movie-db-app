import React from 'react';
import { Container } from 'react-bootstrap';
import MovieList from '../components/MovieList';

const InTheaters = () => {
    return (
        <Container className="my-4">
            <h1 className="display-3 text-center">In theaters</h1>
            <MovieList category="now_playing" />
        </Container>
    );
}
 
export default InTheaters;