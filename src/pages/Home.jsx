import React from 'react';
import { Container } from 'react-bootstrap';

const Home = () => {
    return (
        <Container className="my-4 my-md-5 px-md-5">
            <h1 className="display-1 text-center mb-4 mb-lg-5 mx-lg-5">Welcome to the best movie library on the web</h1>
            <p className="display-5 text-center text-secondary mt-3 mx-sm-5 px-md-5">Finding information on your favorite movies has never been easier. Navigate to movies playing in theaters now, the most popular movies, top rated movies or simply browse movies by genre.</p>
        </Container>
    );
}
 
export default Home;