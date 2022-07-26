import React, { useEffect, Fragment, useState } from "react";
import LoginModal from "../components/LoginModal";
import SignUpModal from "../components/SignUpModal";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
    const [isLoginModalActive, setIsLoginModalActive] = useState(false);
    const [isSignUpModalActive, setisSignUpModalActive] = useState(false);

    return (
        <Fragment>
            <Header></Header>
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
    )
}

export default Home;

