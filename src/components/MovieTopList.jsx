import React from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { getMoviesByCategory } from '../services/API';
import { useQuery } from 'react-query';
import TopListCard from './TopListCard';

const MovieTopList = ({ category }) => {

    // Sending in 'top_rated' (for TopRated page), gives us a list of 20 movies
    const { data, error, isError, isLoading } = useQuery(['movies', category], () => getMoviesByCategory(category));

    return (
        <Container className="my-4">
            <Row className="mx-auto" style={{maxWidth: '900px'}}>
                {isLoading && <p className="loading">Loading...</p>}
                {isError && <Alert variant="danger" className="fs-4 text-center">{error.message}</Alert>}
                {/* Renders a top 10 list of TopListCard components */}
                {data?.results && data.results.slice(0, 10).map((movie, i) => (
                    <Col key={movie.id} xs={12} md={6} className="px-3 px-md-1">
                        <TopListCard movie={movie} index={i} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
 
export default MovieTopList;