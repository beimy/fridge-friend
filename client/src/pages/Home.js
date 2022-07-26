import React, { useEffect, Fragment, useState } from "react";
import LoginModal from "../components/LoginModal";
import SignUpModal from "../components/SignUpModal";
import { Outlet } from "react-router-dom";
import HomePage from '../components/homePage/homePage.component'
const Home = () => {
    const [isLoginModalActive, setIsLoginModalActive] = useState(false);
    const [isSignUpModalActive, setisSignUpModalActive] = useState(false);

    return (
        <div>
        <Fragment>
            <button type="button" onClick={function() {setIsLoginModalActive(true)}}>Login</button>
            {isLoginModalActive && <LoginModal
                                modalToggle={setIsLoginModalActive}
                                
                                />
            }

            <button type="button" onClick={function() {setisSignUpModalActive(true)}}>Sign Up</button>
            {isSignUpModalActive && <SignUpModal
                                modalToggle={setisSignUpModalActive}
                                
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

