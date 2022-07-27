import React, { useEffect, Fragment, useState } from "react";
import LoginModal from "../components/LoginModal";
import SignUpModal from "../components/SignUpModal";
import { Outlet } from "react-router-dom";
import HomePage from '../components/homePage/homePage.component'
const Home = () => {
   

    return (
        <div>
       
                    <Outlet />
                    <HomePage/>
                    
        </div>
    )
    
}

export default Home;

