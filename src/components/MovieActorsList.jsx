import React from 'react';
import { Row, Col } from 'react-bootstrap';
import MovieActorCard from './MovieActorCard';

const MovieActorsList = ({ cast }) => {
    return (
        // Renders a list of cast members with MovieActorCard in a grid system
        <Row className="justify-content-center">
            {cast?.length > 0 && cast.map(actor => (
                <Col key={actor.cast_id} xs={6} sm={4} md={3} className="my-3 d-flex justify-content-center">
                    <MovieActorCard actor={actor} />
                </Col>
            ))}
        </Row>
    );
}
 
export default MovieActorsList;