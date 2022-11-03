import { useState, useEffect } from "react";
import { getOnePlanet } from '../services/starwarsApiServices';
import { useParams } from "react-router-dom"

export const Planet = (props) => {
    const [planet, setPlanet] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        getOnePlanet(id)
            .then((data) => {
                const onePlanet = data
                setPlanet(onePlanet);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id]);

    return (
        <>
            <div className="flex-col align-items-center text-center">
                <h1>{planet.name}</h1>
                <p><b>Climate: </b> {planet.climate}</p>
                <p><b>Terrain: </b> {planet.terrain}</p>
                <p><b>Surface Water: </b> {planet.surface_water}</p>
                <p><b>Population: </b> {planet.population}</p>
            </div>
        </>
    )
}