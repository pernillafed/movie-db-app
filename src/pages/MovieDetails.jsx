import React from 'react';
import { Col, Container, Row, Alert } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useQuery } from 'react-query';
import { getMovieById } from '../services/API';
import MovieDetailsCard from '../components/MovieDetailsCard';
import MovieGenreCard from '../components/MovieGenreCard';
import MovieActorsList from '../components/MovieActorsList';

const MovieDetails = () => {

    const { movieId } = useParams();
    // Gives us details of the movie and credits such as cast
    const { data, error, isError, isLoading } = useQuery(['movie', movieId], () => getMovieById(movieId));

    return (
        <Container className="my-4">
            {isLoading && <p className="loading">Loading...</p>}
            {isError && <Alert variant="danger" className="fs-4 text-center">{error.message}</Alert>}
            {data && ( 
                <div className="mx-auto" style={{maxWidth:'900px'}}>
                    <h1 className="display-3 text-center">{data.title}</h1>
                    {data.tagline ? <p className="text-center fs-4"><i>{data.tagline}</i></p> : ""}
                    {/* Content of MovieDetails page */}
                    <div className="px-3 my-3 my-lg-4">
                        {/* Image and 'Details' card */}
                        <div className="row mb-md-3 mb-lg-4">
                            <div className="p-0 pe-md-3 pe-lg-4 col-12 col-md-6">
                                {data.poster_path ? (
                                    <img className="w-100 p-0 rounded-3" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.title} />
                                ) : (
                                    <div className="bg-dark d-flex justify-content-center align-items-center rounded-3 shadow p-3" style={{height: '200px'}}>
                                        <i className="fas fa-image fs-1 text-secondary"></i>
                                    </div>
                                )}
                            </div>
                            <MovieDetailsCard data={data} />
                        </div>
                        <p className="fs-5"><i>{data.overview ? data.overview : ""}</i></p>
                        <div className="my-5 mx-auto" style={{maxWidth: '700px'}}>
                            <h2>Genres</h2>
                            {/* Renders a list of the movie's genres with MovieGenreCard in a grid system */}
                            <Row>
                                {data.genres.length > 0 ? data.genres.map(genre => (
                                    <Col key={genre.id} xs={12} md={6} className="px-2">
                                        <MovieGenreCard genre={genre} />
                                    </Col>
                                )) : <p>Not specified</p>}
                            </Row>
                        </div>
                        <div className="mx-auto" style={{maxWidth: '700px'}}>
                            <h2>Top cast</h2>
                            <MovieActorsList cast={data.credits.cast} />
                        </div>
                    </div>
                </div>
            )}
        </Container>
    );
}
 
export default MovieDetails;