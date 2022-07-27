import React, {  Fragment, useState } from "react";
import LoginModal from "../components/LoginModal";
import SignUpModal from "../components/SignUpModal";
import { Outlet } from "react-router-dom";
import HomePage from '../components/homePage/homePage.component'
const Home = () => {
    const [isLoginModalActive, setIsLoginModalActive] = useState(false);
    const [isSignUpModalActive, setIsSignUpModalActive] = useState(false);

    return (
        <div>
        <Fragment>
            <button type="button" onClick={function() {setIsLoginModalActive(true)}}>Login</button>
            {isLoginModalActive && <LoginModal
                                modalToggle={setIsLoginModalActive}
                                
                                />
            }

            <button type="button" onClick={function() {setIsSignUpModalActive(true)}}>Sign Up</button>
            {isSignUpModalActive && <SignUpModal
                                modalToggle={setIsSignUpModalActive}
                                
                                />
            }

        </Fragment>
        <div>
                    <Outlet />
                    <HomePage/>
                    </div>
        </div>
    )
    
}

export default Home;
