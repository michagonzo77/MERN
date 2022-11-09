import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getAuthorById, deleteAuthor } from '../services/internalApiService';

export const OneAuthor = (props) => {
    const { id } = useParams();
    const [author, setAuthor] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        getAuthorById(id)
            .then((data) => {
                setAuthor(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id])

    const handleDeleteClick = () => {
        deleteAuthor(id)
            .then((data) => {
                navigate('/authors')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    if (author === null) {
        return null
    }

    const { name } = author


    return (
        <>
            <h6>Edit This Author</h6>
            <div className="w-100 mx-auto shadow mb-4 rounded border p-4">
                <h4>{name}</h4>
                <button className="btn btn-sm btn-outline-danger mx-1"
                    onClick={handleDeleteClick}
                >
                    Delete
                </button>
                <Link className="btn btn-sm btn-outline-info mx-1" to={`/authors/${id}/edit`}>Edit</Link>
            </div>
        </>
    )
}