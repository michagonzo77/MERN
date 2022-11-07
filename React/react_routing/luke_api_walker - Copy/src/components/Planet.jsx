import React from "react";

export const Planet = (props) => {
    const { name, climate, terrain, surface_water, population } = props.planet

    return (
        <>
            <div className="text-light flex-col align-items-center text-center">
                <h1>{name}</h1>
                <p><b>Climate: </b> {climate}</p>
                <p><b>Terrain: </b> {terrain}</p>
                <p><b>Surface Water: </b> {surface_water}</p>
                <p><b>Population: </b> {population}</p>
            </div>
        </>
    )
}