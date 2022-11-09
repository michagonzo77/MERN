import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateAuthor, getAuthorById } from "../services/internalApiService";


export const EditAuthor = (props) => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: ''
    })
    const [errors, setErrors] = useState(null)

    useEffect(() => {
        getAuthorById(id)
            .then((data) => {
                setFormData(data)
            })
            .catch((error) => {
                console.log("You Crazy!!")
                console.log(error)
                if (error?.response?.status === 400){
                    navigate(`/authors/nonefound`)
                }
            })
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        updateAuthor(id, formData)
            .then((data) => {
                console.log('New Author Data:', data)
                navigate(`/authors/${data._id}`)
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
                <button className="btn btn-sm btn-outline-success">Submit</button>
            </form>
        </div>
    )
}