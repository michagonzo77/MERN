import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import { createProduct } from '../services/internalApiService';

export const NewProduct = (props) => {
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        description: ''
    })

    const [errors, setErrors] = useState(null)

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        createProduct(formData)
            .then((data) => {
                console.log('New Product Data:', data)
                navigate(`/products/${data._id}`)
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
            <h3 className="text-center">New Product</h3>
            <form onSubmit={(e) => {
                handleSubmit(e);
            }}>
                <div className="form-group">
                    <label className="h6">Title</label>
                    <input
                        onChange={handleFormChanges}
                        type="text"
                        name="title"
                        value={formData.title}
                        className="form-control"
                    />
                    {
                        errors?.title && (
                            <span className="text-danger">{errors.title?.message}</span>
                        )
                    }
                </div>
                <div className="form-group">
                    <label className="h6">Price</label>
                    <input
                        onChange={handleFormChanges}
                        type="text"
                        name="price"
                        value={formData.price}
                        className="form-control"
                    />
                    {
                        errors?.price && (
                            <span className="text-danger">{errors.price?.message}</span>
                        )
                    }
                </div>
                <div className="form-group">
                    <label className="h6">Description</label>
                    <input
                        onChange={handleFormChanges}
                        type="text"
                        name="description"
                        value={formData.description}
                        className="form-control"
                    />
                    {
                        errors?.description && (
                            <span className="text-danger">{errors.description?.message}</span>
                        )
                    }
                </div>
                
                <button className="btn btn-sm btn-outline-success mt-3">Submit</button>
            </form>
        </div>
    )
}