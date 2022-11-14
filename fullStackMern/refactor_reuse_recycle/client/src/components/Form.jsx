import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

export default props => {
    const { initialTitle, initialPrice, initialDescription, onSubmitProp} = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    const [formData, setFormData] = useState({
        title: initialTitle,
        price: initialPrice,
        description: initialDescription
    })

    const [errors, setErrors] = useState(null)

    const navigate = useNavigate();

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     createProduct(formData)
    //         .then((data) => {
    //             console.log('New Product Data:', data)
    //             navigate(`/products/${data._id}`)
    //         })
    //         .catch((error) => {
    //             console.log(error.response?.data?.errors)
    //             setErrors(error.response?.data?.errors)
    //         })
    // }
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({title, price, description});
    }

    const handleFormChanges = (e) => {
        setFormData({
            [e.target.name]: e.target.value
        });
    };


    return (
        <div className="w-50 p-4 rounded mx-auto shadow">
            <h3 className="text-center">New Product</h3>
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label className="h6">Title</label>
                    <input
                        onChange={(e) => { setTitle(e.target.value) }}
                        type="text"
                        name="title"
                        value={title}
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
                        onChange={(e) => { setPrice(e.target.value) }}
                        type="text"
                        name="price"
                        value={price}
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
                        onChange={(e) => { setDescription(e.target.value) }}
                        type="text"
                        name="description"
                        value={description}
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