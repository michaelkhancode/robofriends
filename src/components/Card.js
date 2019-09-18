import React from 'react';
import './card.css';

function Card({ id, name, email }) {
    return(
        <div className ='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-s'>
            <img src={`https://robohash.org/${id}`} alt='robot avitar'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
