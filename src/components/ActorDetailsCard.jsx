import React from 'react';

const ActorDetailsCard = ({ data }) => {
    return (
        // Detailed information about actor/cast member, given by the 'data' prop
        <div className="bg-dark my-3 my-md-0 px-3 px-lg-4 py-2 py-lg-3 rounded-3 col-12 col-md-6">
            <h2 className="mb-4 mt-1">Details</h2>
            <p><span className="fw-bold">Born:</span> {data.birthday ? data.birthday : "N/A"}</p>
            {data.deathday ? <p className="mt-4"><span className="fw-bold">Died:</span> {data.deathday}</p> : ""}
            <p><span className="fw-bold">Place of birth:</span> {data.place_of_birth ? data.place_of_birth : "N/A"}</p>
            <p>
                <span className="fw-bold">Gender:</span>
                {data.gender === 1 ? " Female" : data.gender === 2 ? " Male" : data.gender === 3 ? " Non-binary" : " Not specified"}
            </p>
            {data.homepage ? <p><span className="fw-bold">Homepage:</span> <a style={{color: '#EEE'}} href={data.homepage}>Go to site &raquo;</a></p> : ""}
        </div>
    );
}
 
export default ActorDetailsCard;