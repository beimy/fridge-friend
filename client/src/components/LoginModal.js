import React, { useState } from "react";
import { useMutation, useLazyQuery } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import { QUERY_ME } from "../utils/queries";
import Auth from '../utils/auth';

// import style from '../loginmodal.module.css';

const LoginModal = ({modalToggle, usersFavRecipeList, setUsersFavRecipeList}) => {
    const [formState, setFormState] = useState({email: '', password: ''});
    const [login] = useMutation(LOGIN_USER);
    const [getUserData, {data}] = useLazyQuery(QUERY_ME);
    
    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
    };

    const fetchUserData = () => {
        getUserData();
        console.log(data);
        return data;
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await login({
            variables: { ...formState },
            });

            Auth.login(data.login.token);

            var userData = await fetchUserData();

        } catch (e) {
            console.error(e);
        }

        // clear form values
        setFormState({
            email: '',
            password: '',
        });
    };

    return(
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">Login Here</h4>
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
                        <button className="btn" type="submit">Login</button>
                    </div>
                </form>
                <div className="modal-footer">
                    <div className="receipe-data-button">
                        <button className="button" onClick={function() { modalToggle(false) }}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginModal;

