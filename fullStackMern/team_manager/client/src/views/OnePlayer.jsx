import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getPlayerById, deletePlayer } from '../services/internalApiService';

export const OnePlayer = (props) => {
    const { id } = useParams();
    const [player, setPlayer] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        getPlayerById(id)
            .then((data) => {
                setPlayer(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id])

    const handleDeleteClick = () => {
        deletePlayer(id)
            .then((data) => {
                navigate('/players')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    if (player === null) {
        return null
    }

    const { name, position, over1mil, over10mil, over100mil } = player


    return (
        <div className="w-100 mx-auto shadow mb-4 rounded border p-4">
            <h4>{name}</h4>
            <p>{position}</p>
            {
                over1mil && <p>Salary over $1 Million.</p>
            }
            {
                over10mil && <p>Salary over $10 Million.</p>
            }
            {
                over100mil && <p>Salary over $100 Million.</p>
            }
            <button className="btn btn-sm btn-outline-danger mx-1"
                onClick={handleDeleteClick}
                >
                Delete
            </button>
            <Link className="btn btn-sm btn-outline-info mx-1"  to={`/players/${id}/edit`}>Edit</Link>
        </div>
    )
}
