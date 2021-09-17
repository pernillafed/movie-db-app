import React from 'react';
import { useHistory } from 'react-router';

const TopListCard = ({ movie, index }) => {

    const history = useHistory();

    return (
        <div className="bg-dark my-2 mx-md-1 shadow rounded-3 row align-items-center hover-text-color" onClick={() => history.push(`/movie-details/${movie.id}`)}>
            {/* Using index to get top list number */}
            <span className="fs-1 col-2 ps-3 pe-0 fw-bold mb-2 text-secondary">{index + 1}</span>
            <h2 className="fs-5 col-7 ps-2 pe-4">{movie.title}</h2>
            {movie.poster_path ? (
                <img className="w-25 rounded-end p-0 col" src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={movie.title} />
            ) : (
                <div className="d-flex justify-content-center align-items-center rounded-end shadow p-3 col" style={{background: '#101113', width: '100%', height: '100%'}}>
                    <i class="fas fa-image fs-2 text-secondary"></i>
                </div>
            )}
        </div>
    );
}
 
export default TopListCard;