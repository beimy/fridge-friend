import React from "react";
import { Link } from "react-router-dom";
import icon from "../../assets/icon.png";
import Auth from "../../utils/auth";

const NavBar = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <div>
      <img
        src={icon}
        className="icon"
        style={{ width: "5%" }}
        alt="fridge-friend"
      />
      <Link to="/">
        <h1 className="title">Fridge Friend</h1>
      </Link>
      <nav className="nav">
        {Auth.loggedIn() ? (
          <>
            <Link to="/UserProfilePage"></Link>
            <a href="/" onClick={logout}>
              Logout
            </a>
          </>
        ) : (
          <>
            <Link to="/searchPage">Search</Link>
            <Link to="/SinglePage">Favorites</Link>
          </>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
