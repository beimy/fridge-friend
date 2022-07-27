import React, {  Fragment, useState } from "react";
import LoginModal from "../components/LoginModal";
import SignUpModal from "../components/SignUpModal";

const Home = () => {
    const [isLoginModalActive, setIsLoginModalActive] = useState(false);
    const [isSignUpModalActive, setIsSignUpModalActive] = useState(false);

    return (
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
    )
}

export default Home;
