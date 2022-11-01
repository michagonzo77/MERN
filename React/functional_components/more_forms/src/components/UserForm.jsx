import React, { useState } from  'react';
    
    
export const UserForm = (props) => {
    // const [userInfo, setUserInfo] = useState("")
    // const {firstName, lastName, email, password} = userInfo
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    // const [firstName, lastName, email, password, confirmPassword] = useState("")
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    
    const [formDataErrors, setFormDataErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = formData;
        console.log("Welcome", newUser.firstName);
        setHasBeenSubmitted( true );
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setFormData("");
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
        <form className="form-group" onSubmit={ createUser }>
            {
            hasBeenSubmitted ? 
            <h3>Thank you for submitting the form!</h3> :
            <h3>Welcome, please submit the form.</h3> 
            }
            <div className="form-control w-50 marginauto">
                <label>First Name: </label> 
                <input type="text" name="firstName" onChange={ (e) =>{
                    setFirstName(e.target.value);
                    if(e.target.value.length < 3 && e.target.value.length != 0){
                        setFormDataErrors({
                            ...formDataErrors,
                            firstNameError: "You need at least 3 characters."
                        })
                    }else{
                        setFormDataErrors({
                            ...formDataErrors,
                            firstNameError: ""
                        })
                    }
                    setFormData({
                        ...formData,
                        [e.target.name]: e.target.value
                    })
                }} value={firstName} />
            </div>
            <p className="text-danger">{formDataErrors.firstNameError}</p>
            <div className="form-control w-50 marginauto">
                <label>Last Name: </label> 
                <input type="text" name="lastName" onChange={ (e) =>{
                    setLastName(e.target.value);
                    if(e.target.value.length < 3){
                        setFormDataErrors({
                            ...formDataErrors,
                            lastNameError: "You need at least 3 characters."
                        })
                    }else{
                        setFormDataErrors({
                            ...formDataErrors,
                            lastNameError: ""
                        })
                    }
                    setFormData({
                        ...formData,
                        [e.target.name]: e.target.value
                    })
                }} value={lastName} />
            </div>
            <p className="text-danger">{formDataErrors.lastNameError}</p>
            <div className="form-control w-50 marginauto">
                <label>Email Address: </label> 
                <input type="text" name="email" onChange={ (e) =>{
                    setEmail(e.target.value);
                    if(e.target.value.length < 3){
                        setFormDataErrors({
                            ...formDataErrors,
                            emailError: "You need at least 3 characters."
                        })
                    }else{
                        setFormDataErrors({
                            ...formDataErrors,
                            emailError: ""
                        })
                    }
                    setFormData({
                        ...formData,
                        [e.target.name]: e.target.value
                    })
                }} value={email} />
            </div>
            <p className="text-danger">{formDataErrors.emailError}</p>
            <div className="form-control w-50 marginauto">
                <label>Password: </label> 
                <input type="password" name="password" onChange={ (e) =>{
                    setPassword(e.target.value);
                    if(e.target.value.length < 3){
                        setFormDataErrors({
                            ...formDataErrors,
                            passwordError: "You need at least 3 characters."
                        })
                    }else{
                        setFormDataErrors({
                            ...formDataErrors,
                            passwordError: ""
                        })
                    }
                    setFormData({
                        ...formData,
                        [e.target.name]: e.target.value
                    })
                }} value={password} />
            </div>
            <p className="text-danger">{formDataErrors.passwordError}</p>
            <div className="form-control w-50 marginauto">
                <label>Confirm Password: </label> 
                <input type="password" name="confirmPassword" onChange={ (e) =>{
                    setConfirmPassword(e.target.value);
                    if(e.target.value !== formData.password){
                        setFormDataErrors({
                            ...formDataErrors,
                            confirmPasswordError: "Password must match."
                        })
                    }else{
                        setFormDataErrors({
                            ...formDataErrors,
                            confirmPasswordError: ""
                        })
                    }
                    setFormData({
                        ...formData,
                        [e.target.name]: e.target.value
                    })
                }} value={confirmPassword} />
            </div>
            <p className="text-danger">{formDataErrors.confirmPasswordError}</p>
            <input type="submit" value="Create User" />
        </form>
        <p>First Name: {formData.firstName}</p>
        <p>Last Name: {formData.lastName}</p>
        <p>Email: {formData.email}</p>
        <p>Password: {formData.password}</p>
        <p>Confirm Password: {formData.confirmPassword}</p>
        </>
    );
};