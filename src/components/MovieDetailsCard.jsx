import React from 'react';

const MovieDetailsCard = ({ data }) => {
    return (
        // Detailed information about movie, given by the 'data' prop
        <div className="bg-dark my-3 my-md-0 px-3 px-lg-4 py-2 py-lg-3 rounded-3 col-12 col-md-6">
            <h2 className="mb-4 mt-1">Details</h2>
            <p><span className="fw-bold">Release date:</span> {data.release_date ? data.release_date : "N/A"}</p>
            <p><span className="fw-bold">Original title:</span> {data.original_title}</p>
            <p><span className="fw-bold">Runtime:</span> {data.runtime ? data.runtime + " min" : "N/A"}</p>
            <div>
                <span className="fw-bold">Spoken languages:</span>
                <ul>
                    {data.spoken_languages.length > 0 ? data.spoken_languages.map((language, i) => <li key={i}>{language.english_name}</li>) : <p>N/A</p>}
                </ul>
            </div>
            {data.homepage ? <p><span className="fw-bold">Homepage:</span> <a style={{color: '#EEE'}} href={data.homepage}>Go to site &raquo;</a></p> : ""}
            <div>
                <span className="fw-bold">Production companies:</span>
                <ul>
                    {data.production_companies.length > 0 ? data.production_companies.map((company, i) => <li key={i}>{company.name}</li>) : <p>N/A</p>}
                </ul>
            </div>
            <div>
                <span className="fw-bold">Production countries:</span>
                <ul>
                    {data.production_countries.length > 0 ? data.production_countries.map((country, i) => <li key={i}>{country.name}</li>) : <p>N/A</p>}
                </ul>
            </div>
        </div>
    );
}
 
export default MovieDetailsCard;