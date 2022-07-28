import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const SignUpModal = ({modalToggle}) => {
    const [formState, setFormState] = useState({email: '', username: '', password: ''});
    const [addUser, { error }] = useMutation(ADD_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addUser({
            variables: { ...formState },
            });

            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }
    };

    return(
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">Sign Up Below</h4>
                </div>
                <div className="modal-body">
  
                </div>
                <form onSubmit={handleFormSubmit}>
                    <label>Email:
                        <input 
                            className="form-input" 
                            placeholder="Your Email"
                            name="email"
                            type='email'
                            id="email"
                            value={formState.email}
                            onChange={handleChange}/>
                    </label>
                    <label>Username:
                        <input  
                            className="form-input"
                            placeholder="Your Username"
                            name="username"
                            type="username"
                            id="username"
                            value={formState.username}
                            onChange={handleChange}
                        />
                    </label>
                    <label>Password:
                        <input  
                            className="form-input"
                            placeholder="******"
                            name="password"
                            type="password"
                            id="password"
                            value={formState.password}
                            onChange={handleChange}
                        />
                    </label>
                    <div className="receipe-data-button">
                        <button className="btn" type="submit">Sign Up</button>
                    </div>
                    
                </form>
                <div className="modal-footer">
                    <div className="receipe-data-button">
                        <button className="button" onClick={function() {modalToggle(false)}}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpModal;