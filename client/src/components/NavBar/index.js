import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo/logo2.svg";
import search from "../../assets/icons/search.png";
import donations from "../../assets/icons/money.png";
import favorite from "../../assets/icons/heart.png";

import LoginModal from "../LoginModal";
import SignUpModal from "../SignUpModal";

import Auth from "../../utils/auth";

const NavBar = () => {
  
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const [isLoginModalActive, setIsLoginModalActive] = useState(false);
  const [isSignUpModalActive, setisSignUpModalActive] = useState(false);

  return (
    <>
      <nav className="nav">
          <>
            <ul id="rightnav">
              <li>
                <div className="logo">
                  <Link to="/">
                    <img src={logo} className="logo" alt="fridge-friend" />
                  </Link>
                </div>
              </li>
              <li>
                <Link to="/searchpage" style={{ textDecoration: "none" }}>
                  <img src={search} alt="search" />
                  <span>search</span>
                </Link>
              </li>
                {Auth.loggedIn() ? (
                  <li>
                    <Link to="/userprofilepage" style={{ textDecoration: "none" }}>
                      <img src={favorite} alt="favorite" />
                      <span>favorites</span>
                    </Link>
                  </li>
                ) : (
                  <li>
                    <button type="button" onClick={function () {setIsLoginModalActive(true);}}>Login</button>
                  </li>
                )}
                {Auth.loggedIn() ? (
                  <>
                    <Link to="/userprofilepage"></Link>
                    <a href="/" onClick={logout}>
                      Logout
                    </a>
                  </>
                ) : (
                  <li>
                    <button type="button" onClick={function () {setisSignUpModalActive(true)}}>Sign Up</button>
                  </li>
                )}
              <li>
                <Link to="/donations" style={{ textDecoration: "none" }}>
                  <img src={donations} alt="donations" />
                  <span>donations</span>
                </Link>
              </li>
            </ul>
          </>
      </nav>

      <>
        {isLoginModalActive && <LoginModal modalToggle={setIsLoginModalActive}/>}
        {isSignUpModalActive && <SignUpModal modalToggle={setisSignUpModalActive}/>}   
      </>
    </>
   
  );
};

export default NavBar;
