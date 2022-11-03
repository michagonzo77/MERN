import axios from "axios";
// https://swapi.dev/api/people
const http = axios.create({
    baseURL: 'https://swapi.dev/api/'
})

export const getOnePerson = async (id) => {
    const res = await http.get(`/people/${id}`);
    console.log(res.data)
    return res.data;
}

export const getOnePlanet = async (id) => {
    const res = await http.get(`/planets/${id}`);
    console.log(res.data)
    return res.data;
}