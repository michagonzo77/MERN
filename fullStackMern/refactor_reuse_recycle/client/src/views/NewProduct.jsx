import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Form from "../components/Form"

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
            <Form onSubmitProp={handleSubmit} initialTitle="" initialPrice="" initialDescription=""/>
        </div>
    )
}