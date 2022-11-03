import React from "react";
import { useNavigate } from "react-router-dom"

export const Person = (props) => {
    const {height, mass, hair_color, skin_color, name, homeworld} = props.person
    const navigate = useNavigate();
    const url = new URL(homeworld)

    const sendToPlanet = () => {
        navigate(`/home${url.pathname}`)
    }

    return (
        <>
            <div className="flex-col align-items-center text-center">
                <h1>{name}</h1>
                <p><b>Height: </b> {height}</p>
                <p><b>Mass: </b> {mass}</p>
                <p><b>Hair Color: </b> {hair_color}</p>
                <p><b>Skin Color: </b> {skin_color}</p>
                <p>
                    <b>Homeworld:</b>
                    <button onClick={sendToPlanet}>Homeworld</button>
                </p>
            </div>
        </>
    )
}