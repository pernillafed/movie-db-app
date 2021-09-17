import React from 'react';
import { Container } from 'react-bootstrap';
import MovieTopList from '../components/MovieTopList';

const TopRated = () => {
    return (
        <Container className="my-4">
            <h1 className="display-3 text-center">Top Rated</h1>
            <p className="text-center fs-4"><i>Top 10 in the US</i></p>
            <MovieTopList category="top_rated" />
        </Container>
    );
}
 
export default TopRated;