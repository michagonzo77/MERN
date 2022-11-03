import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import { Form } from '../components/Form'
import { Person } from "../components/Person";
import { Planet } from "../components/Planet";
import { Film } from "../components/Film";
import { Error } from "../components/Error";
import { getOneStarWars } from '../services/starwarsApiServices';
import '../App.css';

export const Home = (props) => {
    const { type, id } = useParams();
    const [person, setPerson] = useState(null);
    const [planet, setPlanet] = useState(null);
    const [film, setFilm] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        getOneStarWars(type, id)
            .then(data => {
                if (type === "people") {
                    setPerson(data);
                    setPlanet(null);
                    setError(null);
                }
                else if (type === "planets") {
                    setPlanet(data);
                    setPerson(null);
                    setError(null);
                }
                else if (type === "films") {
                    setFilm(data);
                    setPlanet(null);
                    setPerson(null);
                    setError(null);
                }
            })
            .catch(err => {
                console.log(err.response.status);
                if (type !== undefined && id !== undefined){
                    setFilm(null);
                    setPlanet(null);
                    setPerson(null);
                    setError("These are not the droids you are looking for")
                }
            });
    }, [type, id]);

    return (
        <div className="all">
            <Link className="main" to="/">Home</Link>
            <Form />
            {
                person && <Person person={person} />
            }
            {
                planet && <Planet planet={planet} />
            }
            {
                film && <Film film={film} />
            }
            {
                error && <Error error={error} />
            }
        </div>
    )
}