import React from 'react';
import { useHistory } from 'react-router';

// Separate component because of reusability

const MovieGenreCard = ({ genre }) => {

    const history = useHistory();

    return (
        // onClick pushes two regular params, but also search param 'page=1' to make initial page '1'
        <div className="bg-dark my-2 rounded-3 shadow py-3 hover-text-color" onClick={() => history.push(`/movie-genres/${genre.name}/${genre.id}?page=1`)}>
            <h2 className="fs-5 text-center m-0">{genre.name}</h2>
        </div>
    );
}
 
export default MovieGenreCard;