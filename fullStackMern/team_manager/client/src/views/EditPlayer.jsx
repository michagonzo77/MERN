import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { updatePlayer, getPlayerById } from "../services/internalApiService";


export const EditPlayer = (props) => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        position: ''
    })
    const [errors, setErrors] = useState(null)

    useEffect(() => {
        getPlayerById(id)
            .then((data) => {
                setFormData(data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        updatePlayer(id, formData)
            .then((data) => {
                console.log('New Player Data:', data)
                navigate(`/players/${data._id}`)
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
            <h3 className="text-center">New Player</h3>
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
                <div className="form-group">
                    <label className="h6">Position</label>
                    <input
                        onChange={handleFormChanges}
                        type="text"
                        name="position"
                        value={formData.position}
                        className="form-control"
                    />
                    {
                        errors?.position && (
                            <span className="text-danger">{errors.position?.message}</span>
                        )
                    }
                </div>
                <button className="btn btn-sm btn-outline-success mt-3">Submit</button>
            </form>
        </div>
    )
}