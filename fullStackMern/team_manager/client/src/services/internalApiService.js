import axios from "axios";

const http = axios.create({
    baseURL: 'http://localhost:8001/api'
});

export const getAllPlayers = async () => {
    const res = await http.get('/players');
    return res.data;
}

export const getPlayerById = async (id) => {
    const res = await http.get(`/players/${id}`);
    return res.data;
}

export const createPlayer = async (data) => {
    const res = await http.post('/players', data);
    return res.data;
}

export const updatePlayer = async (id, data) => {
    const res = await http.put(`/players/${id}`, data);
    return res.data;
}

export const deletePlayer = async (id) => {
    const res = await http.delete(`/players/${id}`);
    return res.data;
}