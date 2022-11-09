import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import { createAuthor } from '../services/internalApiService';

export const NewAuthor = (props) => {
    const [formData, setFormData] = useState({
        name: ''
    })

    const [errors, setErrors] = useState(null)

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        createAuthor(formData)
            .then((data) => {
                console.log('New Author Data:', data)
                navigate(`/authors/${data._id}`)
            })
            .catch((error) => {
                console.log(error.response?.data?.errors)
                setErrors(error.response?.data?.errors)
            })
    }

    const handleFormChanges = (e) => {
        if (e.target.checked) {
            setFormData({
                ...formData,
                [e.target.name]: e.target.checked
            })
            return null;
        }
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    return (
        <div className="w-50 p-4 rounded mx-auto shadow">
            <h3 className="text-center">New Author</h3>
            <form onSubmit={(e) => {
                handleSubmit(e);
            }}>
                <div className="form-group">
                    <label className="h6">Name</label>
                    <input
                        onChange={handleFormChanges}
                        type="text"
                        name="name"
                        value={formData.name}
                        className="form-control"
                    />
                    {
                        errors?.name && (
                            <span className="text-danger">{errors.name?.message}</span>
                        )
                    }
                </div>
                <button className="btn btn-sm btn-outline-success mt-3">Submit</button>
            </form>
        </div>
    )
}