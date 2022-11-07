import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import '../App.css';

export const Form = (props) => {
    const [formInfo, setFormInfo] = useState({
        type: "error",
        id: "id number here"
    })
    const navigate = useNavigate();

    const handleInput = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { type, id } = formInfo;
        navigate(`/home/api/${type}/${id}`)
        setFormInfo({
            type: type,
            id: id
        })
    }

    return (
        <div className="main text-center">
            <form className="form-group" onSubmit={handleSubmit}>
                <div className="form-control mt-5">
                    <label className="me-5">Search For: </label>
                    <select name="type" onChange={handleInput}>
                        <option value="error">--Select One--</option>
                        <option value="people">people</option>
                        <option value="planets">planets</option>
                        <option value="films">films</option>
                    </select>
                </div>
                <div className="form-control mt-3 mb-3">
                    <label className="me-3">ID: </label>
                    <input type="number" name="id" placeholder={formInfo.id} onChange={handleInput}/>
                </div>
                <input className="btn btn-danger mb-md" type="submit" value="Search" />
            </form>
        </div>
    );
};