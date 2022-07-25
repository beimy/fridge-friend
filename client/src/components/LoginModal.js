<<<<<<< HEAD
import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const LoginModal = ({modalToggle}) => {
    const [formState, setFormState] = useState({email: '', password: ''});
    const [login, { error }] = useMutation(LOGIN_USER);

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
            const { data } = await login({
            variables: { ...formState },
            });

            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setFormState({
            email: '',
            password: '',
        });
    };

=======
import React from "react";

const loginModal = props => {
>>>>>>> e34306583aa460b684e15955686f22149639818a
    return(
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">Login</h4>
                </div>
                <div className="modal-body">
<<<<<<< HEAD
                    Please Log In
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
                    <button className="btn" type="submit">Login</button>
                </form>
                <div className="modal-footer">
                    <button className="button" onClick={function() {modalToggle(false)}}>Close</button>
=======
                    This is modal content 
                </div>
                <div className="modal-footer">
                    <button className="button">Close</button>
>>>>>>> e34306583aa460b684e15955686f22149639818a
                </div>
            </div>
        </div>
    )
}

<<<<<<< HEAD
export default LoginModal;

=======
export default loginModal;
>>>>>>> e34306583aa460b684e15955686f22149639818a
