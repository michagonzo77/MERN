import React from 'react';
    

export const PersonCard = props => {
    return (
        <div>
        <h1>{ props.lastName }, { props.firstName }</h1>
        <p>Age: {props.age} </p>
        <p>Hair Color: { props.color }</p>
        </div>
    )
}