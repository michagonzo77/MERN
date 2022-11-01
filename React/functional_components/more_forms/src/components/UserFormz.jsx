import React, { useState } from  'react';
    
    
export const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password };
        console.log("Welcome", newUser.firstname);
        setHasBeenSubmitted( true );
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setConfirmpassword("");
        
    };

    const formMessage = () => {
        if( hasBeenSubmitted ) {
            return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit the form";
	}
    };
    
    return(
        <>
        <form onSubmit={ createUser }>
            {
            hasBeenSubmitted ? 
            <h3>Thank you for submitting the form!</h3> :
            <h3>Welcome, please submit the form.</h3> 
            }
            <div className="Form-section">
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFirstname(e.target.value) } value={firstname} />
            </div>
            <div className="Form-section">
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastname(e.target.value) } value={lastname} />
            </div>
            <div className="Form-section">
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } value={email} />
            </div>
            <div className="Form-section">
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } value={password} />
            </div>
            <div className="Form-section">
                <label>Confirm Password: </label>
                <input type="password" onChange={ (e) => setConfirmpassword(e.target.value) } value={confirmpassword} />
            </div>
            <input type="submit" value="Create User" />
        </form>
        <p>First Name: {firstname}</p>
        <p>Last Name: {lastname}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirmpassword}</p>
        </>
    );
};