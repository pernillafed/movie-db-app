import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import ActorDetailsCard from '../components/ActorDetailsCard';
import { getActorById } from '../services/API';
import { Container, Alert } from 'react-bootstrap';
import ActorMoviesList from '../components/ActorMoviesList';

const ActorDetails = () => {

    const { actorId } = useParams();
    // Gives us details about the actor/cast member
    const { data, error, isError, isLoading } = useQuery(['actor', actorId], () => getActorById(actorId));

    return (
        <Container className="my-4">
            {isLoading && <p className="loading">Loading...</p>}
            {isError && <Alert variant="danger" className="fs-4 text-center">{error.message}</Alert>}
            {data && (
                <div className="mx-auto" style={{maxWidth:'900px'}}>
                    <h1 className="display-3 text-center">{data.name}</h1>
                    {/* Content of ActorDetails page */}
                    <div className="px-3 my-3 my-lg-4">
                        {/* Image and 'Details' card */}
                        <div className="row mb-md-3 mb-lg-4">
                            <div className="p-0 pe-md-3 pe-lg-4 col-12 col-md-6">
                                {data.profile_path ? (
                                    <img className="w-100 p-0 rounded-3" src={`https://image.tmdb.org/t/p/w500${data.profile_path}`} alt={data.name} />
                                ) : (
                                    <div className="bg-dark d-flex justify-content-center align-items-center rounded-3 shadow p-3" style={{height: '220px'}}>
                                        <i className="fas fa-user fs-1 text-secondary"></i>
                                    </div>
                                )}
                            </div>
                            <ActorDetailsCard data={data} />
                        </div>
                        <p className="fs-5"><i>{data.biography}</i></p>
                        <div className="my-5 mx-auto" style={{maxWidth: '700px'}}>
                            <h2 className="mt-5">Popular movies</h2>
                            <ActorMoviesList actorId={actorId} />
                        </div>
                    </div>
                </div>
            )}
        </Container>
    );
}
 
export default ActorDetails;