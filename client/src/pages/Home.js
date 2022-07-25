<<<<<<< HEAD
import React, { useEffect, Fragment, useState } from "react";
import LoginModal from "../components/LoginModal";
import SignUpModal from "../components/SignUpModal";
=======
import React, { useState, useEffect } from "react";
import LoginModal from "../components/LoginModal";

const app_id = process.env.REACT_APP_EDAMAM_APP_ID;
const api_key = process.env.REACT_APP_EDAMAM_API_KEY;
>>>>>>> e34306583aa460b684e15955686f22149639818a

const Home = () => {
    const [isLoginModalActive, setIsLoginModalActive] = useState(false);
    const [isSignUpModalActive, setisSignUpModalActive] = useState(false);

    return (
<<<<<<< HEAD
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
=======
        <main>
            <div>
                <h1>Hi there</h1>
                {loading && <div>A moment...</div>}
                <form>
                    <label>Enter Food to search recipes by:
                        <input value={searchQuery} onInput={e => setSearchQuery(e.target.value)}/>
                    </label>
                    <button type="button" onClick={sendReq}>Send Request</button>
                </form>
                
                <LoginModal />
                
            </div>
        </main>
>>>>>>> e34306583aa460b684e15955686f22149639818a
    )
}

export default Home;

