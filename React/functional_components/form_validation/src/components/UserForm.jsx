import React, { useReducer } from 'react';

const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
};

const reducer = (state, action) => {
    return { ...state, [action.type]: action.payload };
};

export const UserForm = () => {
    // Use reducer returns 2 items: current state and the dispatch function by taking in the reducer function and the initial state.
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleInput = (e) => {
        const { name, value } = e.target;
        const error = validateInput(name, value);
        // Action object created on input change to tell state what to change.
        const action = {
            type: name,
            payload: {
                value: value,
                error: error,
            },
        };
    // Dispatch function to dispatch the action object to state.
    dispatch(action);
    };

    const validateInput = (type, value) => {
        let validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (type === "firstName" || type === "lastName") {
            if (value.length === 0) {
                return null;
            } else if (value.length < 2){
                return true;
            } else {
                return null;
            }
        } else if (type === "email") {
            if (validEmail.test(value)){
                return null;
            }
        }
    };

    const createUser = (e) => {
        e.preventDefault();
        // Check if validation is valid before this line.
        const newUser = e.target;
        // Refresh state to match initial state.
        console.log("Welcome", newUser.firstName.value);
        // Not refreshing state, only refreshing the values. Look at line 63.
        e.target.firstName.value = ""
        e.target.lastName.value = ""
        e.target.email.value = ""
    };


    return (
        <div>
            <form className="form-group" onSubmit={ createUser }>
            <div>
                <label>
                    <span>First Name:</span>{' '}
                    <input
                        className="form-control"
                        name="firstName"
                        onChange={(e) => handleInput(e)}
                    />
                </label>
                {state.firstName.error !== null && (
                <p>First Name must be at least 2 characters.</p>
                )}
            </div>
            <div>
                <label>
                    <span>Last Name:</span>{' '}
                    <input
                        className="form-control"
                        name="lastName"
                        onChange={(e) => handleInput(e)}
                    />
                </label>
                {state.lastName.error !== null && (
                <p>Last Name must be at least 2 characters.</p>
                )}
            </div>
            <div>
                <label>
                    <span>Email:</span>{' '}
                    <input
                        className="form-control"
                        name="email"
                        onChange={(e) => handleInput(e)}
                    />
                </label>
                {state.email.error !== null && (
                <p>Email must be valid</p>
                )}
            </div>
            <input className="btn btn-success mt-3" type="submit" value="Create User" />
            </form>
        </div>
    );
}