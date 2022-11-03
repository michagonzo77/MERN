import { useEffect, useState } from "react";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { getAllPokemon } from '../services/pokemonApiServices';

export const Pokemon = (props) => {
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // useEffect(() => {
    //     setIsLoading(true)
    //     setTimeout(() => {
    const getAllPokemons = () => {
        getAllPokemon()
            .then((data) => {
                const allPokemon = data
                console.log(data);
                setPokemons(allPokemon);
            })
            .catch((err) => {
                console.log(err);
            })
            // .finally(() => {
            //     setIsLoading(false);
            // })
    }
    //     }, 200)
    // }, []);

    return (
        <div className="flex-col align-items-center text-center">
            <button
                className="btn btn-success"
                onClick={(e) => {
                getAllPokemons()
                }}
            >Get All Pokemon</button>
            {
                pokemons.map((one_pokemon, i) => {
                    const { name } = one_pokemon;
                    return (
                        <div key={i} className="w-25pct mb-md shadow rounded">
                            <h2>{name}</h2>
                        </div>
                    )
                })
            }
        </div>
    )
}