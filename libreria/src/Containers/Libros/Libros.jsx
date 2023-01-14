import React, { useState, useEffect } from 'react';
import "./Libros.scss";
import { useSelector } from "react-redux";
import { libroData } from "./LibrosSlice";
import { userData } from "../User/userSlice";
import { useNavigate } from 'react-router-dom';
import { rentLibro } from '../../services/apiCalls';

const Libro = () => {

    const selectedLibro = useSelector(libroData);
    const credentials = useSelector(userData);
    const navigate = useNavigate();//Necesario para navegar

    //VARIABLE NUEVA
    const title = selectedLibro?.title;
    const email = credentials?.credentials?.email;
    const idUser = credentials?.credentials?.id_user;
    const jwt = credentials?.credentials?.jwt;
    const body = { email, title };

    const watchMe = () => {
        console.log("AQUI ESTA EL ID DE USER!!", idUser);
        console.log("AQUI ESTA EL TITULO DE LIBRO SELECCIONADO", title)
        console.log("AQUI ESTA EL JWT", jwt)
        console.log("AQUI ESTA EL BODY", body)
        rentLibro(body, jwt);
        navigate("/profile")//De momento solo va a home.

    }




    const returnHome = () => {
        navigate("/");
    }

    if (selectedFilm?.id_movie !== undefined) {

        return (
            <div className="filmDesign">
                {selectedFilm?.title}
                <img className="filmPic" src={selectedFilm?.image} />

                {credentials?.credentials?.jwt !== undefined &&

                    <div onClick={() => watchMe()} className='buttonDesign'>
                        Rent me!
                    </div>

                }
                <div onClick={() => returnHome()} className='buttonDesign'>
                    Volver a Home
                </div>

            </div>
        )

    } else {
        return (
            <div className="filmDesign">
                <div>Ha Habido un error</div>
                <div onClick={() => returnHome()} className='buttonDesign'>
                    Volver a Home
                </div>

            </div>


        )
    }


}
export default Libro;