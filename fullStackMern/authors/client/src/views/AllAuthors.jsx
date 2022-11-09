import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { getAllAuthors, deleteAuthor } from "../services/internalApiService";

export const AllAuthors = (props) => {
    const [authors, setAuthors] = useState([])

    useEffect(() => {
        getAllAuthors()
            .then((data) => {
                setAuthors(data);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const handleDeleteClick = (idToDelete) => {
        deleteAuthor(idToDelete)
            .then((data) => {
                console.log(data)
                const filteredAuthors = authors.filter((author) => {
                    return author._id !== idToDelete
                })
                setAuthors(filteredAuthors);
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div className="w-50 mx-auto text-center">
            <Link
                to="/authors/new"
                className='btn btn-sm btn-outline-primary mx-1'>
                Add an Author
            </Link>
            <h4>We have quotes by:</h4>
            <table className="table table-bordered table-striped">
                <thead className="bg-dark text-light">
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.sort((a, b) => a.name > b.name ? 1 : -1).map((author, i) => {
                        const { _id, name } = author;
                        return (
                                <tr key={i}>
                                    <td>
                                        <Link to={`/authors/${_id}`}>
                                            <h4>{name}</h4>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link className="btn btn-sm btn-outline-info mx-1" to={`/authors/${_id}/edit`}>Edit</Link>
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
    )
}