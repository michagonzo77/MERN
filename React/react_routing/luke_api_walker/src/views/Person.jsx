import { useState, useEffect } from "react";
import { getOnePerson } from '../services/starwarsApiServices';
import { useParams } from "react-router-dom"

export const Person = (props) => {
    const [person, setPerson] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        getOnePerson(id)
            .then((data) => {
                const onePerson = data
                setPerson(onePerson);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id]);

    return (
        <>
            <div className="flex-col align-items-center text-center">
                <h1>{person.name}</h1>
                <p><b>Height: </b> {person.height}</p>
                <p><b>Mass: </b> {person.mass}</p>
                <p><b>Hair Color: </b> {person.hair_color}</p>
                <p><b>Skin Color: </b> {person.skin_color}</p>
            </div>
        </>
    )
}