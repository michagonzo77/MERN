import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { getAllProducts, deleteProduct, createProduct } from "../services/internalApiService";

export const AllProducts = (props) => {
    const [products, setProducts] = useState([])

    const [formData, setFormData] = useState({
        title: '',
        price: '',
        description: ''
    })

    const [errors, setErrors] = useState(null);

    useEffect(() => {
        getAllProducts()
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        createProduct(formData)
            .then((data) => {
                console.log('New Product Data:', data)
                getAllProducts()
                    .then((data) => {
                        setProducts(data);
                    })
                    .catch((error) => {
                        console.log(error)
                    })
                setFormData({
                    title: '',
                    price: '',
                    description: ''
                })
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

    const handleDeleteClick = (idToDelete) => {
        deleteProduct(idToDelete)
            .then((data) => {
                console.log(data)
                const filteredProducts = products.filter((product) => {
                    return product._id !== idToDelete
                })
                setProducts(filteredProducts);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div>
            <form className="w-50 m-auto" onSubmit={(e) => {
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
            <hr/>
            <div className="w-50 mx-auto text-center">
                <h2>Travel Products</h2>
                {products.map((product, i) => {
                    const { _id, title, price, description } = product;
                    return (
                        <div key={i} className="shadow mb-4 rounded border p-4">
                            <Link to={`/products/${_id}`}>
                                <h4>{title}</h4>
                            </Link>
                            <p>${price}</p>
                            <p>{description}</p>
                            <button className="btn btn-sm btn-outline-danger mx-1"
                                onClick={(e) => {
                                    handleDeleteClick(_id)
                                }}
                            >Delete</button>
                            <Link className="btn btn-sm btn-outline-info mx-1" to={`/products/${_id}/edit`}>Edit</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}