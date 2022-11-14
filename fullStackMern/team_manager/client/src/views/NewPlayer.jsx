import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import { createPlayer } from '../services/internalApiService';

export const NewPlayer = (props) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        position: '',
        over1mil: false,
        over10mil: false,
        over100mil: false
    })
    const [errors, setErrors] = useState(null)

    const [formDataErrors, setFormDataErrors] = useState({
        name: '',
        position: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const error = validateInput();
        if (error === null) {
            // for (const key in formData) {
            //     if (formData[key] === false || formData[key] === 'on') {
            //         delete formData[key]
            //     }
            // }
            console.log(formData)
            createPlayer(formData)
                .then((data) => {
                    console.log('New Player Data:', data)
                    navigate(`/players/list`)
                })
                .catch((error) => {
                    console.log(error.response?.data?.errors)
                    setErrors(error.response?.data?.errors)
                })
        }
    }

    const handleFormChanges = (e) => {
        console.log(formData)
        if (e.target.type === "checkbox") {
            let updatedFormData = {
                ...formData,
                [e.target.name]: e.target.checked
            }
            setFormData({
                ...updatedFormData
            })
            return null;
        }
        // if (e.target.checked) {
        //     let updatedFormData = {
        //         ...formData,
        //         [e.target.name]: e.target.value
        //     }
        //     setFormData({
        //         ...updatedFormData
        //     })
        //     return null;
        // }
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        if (e.target.name === "name") {
            if (e.target.value.length < 2) {
                setFormDataErrors({
                    ...formDataErrors,
                    nameError: "You need at least 2 characters."
                })
            }
            if (e.target.value.length >= 2) {
                setFormDataErrors({
                    ...formDataErrors,
                    nameError: ""
                })
            }
        }
        if (e.target.name === "position") {
            if (e.target.value === "error") {
                setFormDataErrors({
                    ...formDataErrors,
                    positionError: "You need to select a position."
                })
            }
            if (e.target.value !== "error") {
                setFormDataErrors({
                    ...formDataErrors,
                    positionError: ""
                })
            }
        }
        // if (e.target.type === "checkbox"){
        //     if (!e.target.checked) {
        //         setFormData({
        //             ...formData,
        //             [e.target.name]: e.target.checked
        //         })
        //         return null;
        //     }
        // }
    };

    const validateInput = () => {
        if (formData.name.length < 2) {
            return true;
        } else if (formData.name.length >= 2) {
            return null;
        }
    };

    return (
        <div className="w-50 p-4 rounded mx-auto shadow">
            {JSON.stringify(formData.over1mil)}
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
                <p className="text-danger">{formDataErrors.nameError}</p>
                <div className="form-group">
                    <label className="h6">Position</label>
                    <select
                        onChange={handleFormChanges}
                        type="text"
                        name="position"
                        value={formData.position}
                        className="form-control"
                    >
                        <option value="error">--Select One--</option>
                        <option value="forward">forward</option>
                        <option value="goalkeeper">goalkeeper</option>
                        <option value="striker">striker</option>
                        <option value="sweeper">sweeper</option>
                    </select>
                    {
                        errors?.position && (
                            <span className="text-danger">{errors.position?.message}</span>
                        )
                    }
                </div>
                <p className="text-danger">{formDataErrors.positionError}</p>
                <hr />
                <h5>Player Salary</h5>
                <div className="form-check">
                    <input
                        onChange={handleFormChanges}
                        name="over1mil"
                        type="checkbox"
                    />
                    <label className="h6 form-check-label">Over $1,000,000</label>
                </div>
                <div className="form-check">
                    <input
                        onChange={handleFormChanges}
                        name="over10mil"
                        type="checkbox"
                    />
                    <label className="h6 form-check-label">Over $10,000,000</label>
                </div>
                <div className="form-check">
                    <input
                        onChange={handleFormChanges}
                        name="over100mil"
                        type="checkbox"
                    />
                    <label className="h6 form-check-label">Over $100,000,000</label>
                </div>
                {
                    formDataErrors.nameError === "" && formDataErrors.positionError === "" && (
                        <button className="btn btn-sm btn-outline-success mt-3">Submit</button>
                    )
                }
            </form>
        </div>
    )
}