import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateProduct, getProductById } from "../services/internalApiService";


export const EditProduct = (props) => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        description: ''
    })
    const [errors, setErrors] = useState(null)

    useEffect(() => {
        getProductById(id)
            .then((data) => {
                setFormData(data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        updateProduct(id, formData)
            .then((data) => {
                console.log('New Product Data:', data)
                navigate(`/products/${data._id}`)
            })
            .catch((error) => {
                console.log(error.response)
                setErrors(error.response?.data?.errors)
            })
    }

    const handleFormChanges = (e) => {
        if (e.target.type === "checkbox") {
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
    }

    if (formData === null) {
        return null
    }

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
                <button className="btn btn-sm btn-outline-success">Submit</button>
            </form>
        </div>
    )
}