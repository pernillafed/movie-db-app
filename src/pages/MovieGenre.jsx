import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useQuery } from 'react-query';
import { getMoviesByGenre } from '../services/API';
import { Link } from 'react-router-dom';
import Pagination from '../components/Pagination';
import { useUrlSearchParams } from 'use-url-search-params';

const MovieGenre = () => {

    const { genreName, genreId } = useParams();
    // Hook to control search param, is set initially to 'page=1'
    const [searchParams, setSearchParams] = useUrlSearchParams({ page: 1 }, { page: Number });
    // State to set page shown in component
    const [page, setPage] = useState(searchParams.page);
    // Gives us a list of 20 movies based on choosen genre and page number sent in
    const { data, error, isError, isLoading } = useQuery(['genre', genreId, page], () => getMoviesByGenre(genreId, page));

    // When page in component is changed search params is updated with the new page value
    useEffect(() => {
        setSearchParams({ ...searchParams, page });
    }, [page]);

    // When search params page property in the url is changed page in component is updated with the new page value
    useEffect(() => {
        setPage(searchParams.page);
    }, [searchParams.page]);

    return (
        <Container className="my-4">
            <h1 className="display-3 text-center">{genreName}</h1>
            {/* Buttons and page number in here */}
            <Pagination page={page} setPage={setPage} data={data} isLoading={isLoading} />
            <Row className="justify-content-center mx-auto px-2" style={{maxWidth: '720px'}}>
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
 
export default MovieGenre;