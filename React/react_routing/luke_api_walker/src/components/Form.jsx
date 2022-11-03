import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"

export const Form = (props) => {
    const [category, setCategory] = useState("people");
    const [id, setId] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(category)
        navigate(`/${category}/${id}`)
    }

    return (
        <div className="main">
            <form className="form-group" onSubmit={handleSubmit}>
                <div className="form-control mt-5">
                    <label className="me-5">Search For: </label>
                    <select name="category" onChange={(e) => {
                        setCategory(e.target.value);
                    }} value={category} >
                        <option value="people">people</option>
                        <option value="planets">planets</option>
                    </select>
                </div>
                <div className="form-control mt-3 mb-3">
                    <label>ID: </label>
                    <input type="text" name="id" onChange={(e) => {
                        setId(e.target.value);
                    }} value={id} />
                </div>
                <input type="submit" value="Search" />
            </form>
        </div>
    );
};