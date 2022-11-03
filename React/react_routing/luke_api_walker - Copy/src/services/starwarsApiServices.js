import axios from "axios";
// https://swapi.dev/api/people
const http = axios.create({
    baseURL: 'https://swapi.dev/'
})

export const getOneStarWars = async (type, id) => {
    const res = await http.get(`/api/${type}/${id}`);
    return res.data;
}

// export const getOnePlanet = async (url.pathname) => {
//     const res = await http.get(`/${url.pathname}`);
//     return res.data;
// }

