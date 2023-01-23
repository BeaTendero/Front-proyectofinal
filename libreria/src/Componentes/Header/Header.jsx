import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { userData } from "../../containers/User/userSlice";
import { addSearch } from "../../Containers/Libros/LibrosSlice";
import './Header.scss'
import { useNavigate } from 'react-router-dom';
import { searchBooks } from '../../services/apiCalls';
import userSlice from '../Containers/User/userSlice';





const Header = () => {


    const navigate = useNavigate();
    const userReduxCredentials = useSelector(userData);
    const dispatch = useDispatch();

   

    if (userReduxCredentials?.credentials?.jwt !== undefined) {
        //Esta comparativa viene a decirnos que SI tenemos un token

        return (
            <div className='headerDesign'>
                <div onClick={() => navigate("/profile")} className="linkDesign">{userReduxCredentials?.credentials?.name}</div>
                <div onClick={() => navigate("/")} className="linkDesign">Home</div>
            </div>
        )
    } else {
        //Ya que no tenemos un token, no estamos logeados, por lo tanto si damos opcion a logearnos o registrarnos

        return (
            <div className='headerDesign'>
                
                <div onClick={() => navigate('/login')} className="linkDesign">Login</div>
                <div onClick={() => navigate('/register')} className="linkDesign">Register</div>
            </div>
        )
    }


}
export default Header;

