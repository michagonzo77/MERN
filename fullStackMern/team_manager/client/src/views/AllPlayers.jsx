import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { getAllPlayers, deletePlayer } from "../services/internalApiService";

export const AllPlayers = (props) => {
    const [players, setPlayers] = useState([])

    useEffect(() => {
        getAllPlayers()
            .then((data) => {
                setPlayers(data);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const handleDeleteClick = (idToDelete) => {
        if (window.confirm('Are you sure you wish to delete this item?'))
            deletePlayer(idToDelete)
                .then((data) => {
                    console.log(data)
                    const filteredPlayers = players.filter((player) => {
                        return player._id !== idToDelete
                    })
                    setPlayers(filteredPlayers);
                })
                .catch((error) => {
                    console.log(error)
                })
    }

    return (
        <div>
            <hr />
            <div className="mx-auto text-center">
                <Link
                    to="/players"
                    className='btn btn-sm btn-outline-primary mx-1'>
                    List
                </Link>
                <Link
                    to="/players/new"
                    className='btn btn-sm btn-outline-primary mx-1'>
                    Add Player
                </Link>
                <table className="mt-3 table table-bordered table-striped">
                    <thead className="bg-light text-dark">
                        <tr>
                            <th>Player Name</th>
                            <th>Preferred Position</th>
                            <th>Actions Available</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map((player, i) => {
                            const { _id, name, position } = player;
                            return (
                                <tr key={i} className="shadow mb-4 rounded border p-4">
                                    <td>
                                        <Link to={`/players/${_id}`}>
                                            <h4>{name}</h4>
                                        </Link>
                                    </td>
                                    <td>
                                        <p>{position}</p>
                                    </td>
                                    <td>
                                        <button className="btn btn-sm btn-outline-danger mx-1"
                                            onClick={(e) => {
                                                handleDeleteClick(_id)
                                            }}
                                        >Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}