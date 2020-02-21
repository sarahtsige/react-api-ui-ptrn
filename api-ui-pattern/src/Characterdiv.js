import React from 'react';

function Characterdiv(props) {

    return (
            <div className='Character-div'>
                <h2>{props.info.name}</h2>
                <div>{props.info.name}</div>
                <p>Status: {props.info.status}</p>
                <p>Species: {props.info.species}</p>
                <p>Gender: {props.info.gender}</p>
        </div>
    )
}





export default Characterdiv;