import axios from "axios";
// https://pokeapi.co/api/v2/pokemon/
const http = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
})

export const getAllPokemon = async () => {
    const res = await http.get('/pokemon/?limit=807');
    console.log(res.data.results)
    return res.data.results;
}
