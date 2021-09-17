import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';

const MovieActorCard = ({ actor }) => {

    const history = useHistory();
    // State to show the character name of a cast member in MovieDetails page
    const [showCharacter, setShowCharacter] = useState(false);

    return (
        <Card className="rounded-3 shadow hover-shadow" style={{background: '#212529', width: '145px', height: '310px'}}>
            {actor.profile_path ? (
                <Card.Img className="w-100" variant="top" src={`https://image.tmdb.org/t/p/w342${actor.profile_path}`} onClick={() => history.push(`/actor-details/${actor.id}`)} />
            ) : (
                <div className="d-flex justify-content-center align-items-center" style={{width: '100%', height: '100%'}} onClick={() => history.push(`/actor-details/${actor.id}`)}>
                    <i className="fas fa-user fs-1 text-secondary"></i>
                </div>
            )}
            {/* onClick toggles cast member name/character name */}
            <Card.Body className="d-flex justify-content-center align-items-center" onClick={() => setShowCharacter(prevValue => !prevValue)}>
                {!showCharacter ? (
                    <Card.Title className="fs-6 text-center">{actor.name}</Card.Title>
                ) : (
                    <Card.Title className="fs-6 fw-normal text-center text-info"><i>{actor.character ? actor.character : "N/A"}</i></Card.Title>
                )}
            </Card.Body>
        </Card>
    );
}
 
export default MovieActorCard;