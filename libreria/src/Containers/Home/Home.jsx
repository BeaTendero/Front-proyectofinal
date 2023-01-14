import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { bringLibros } from "../../services/apiCalls";
import { useSelector, useDispatch } from "react-redux";
import { userData } from "../User/userSlice";
import { LibroData, addLibro } from "../../../src/Containers/Home/Libros/LibrosSlice";


import "./Home.scss";
import SearchBar from "../../Components/Header/SearchBar/SearchBar";


const Home = () => {
  //Me conecto a RDX en modo lectura.
  const LibrosFromRdx = useSelector(LibroData);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  //Hooks
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    console.log("soy los libros de redux", LibrosFromRdx)
    if (libros.length === 0) {
      bringLibros()
        .then((libros) => {
          setLibros(libros);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  const clickedLibro = (libro) => {
    //Guardo la película seleccionada en redux.

    dispatch(addLibro({ ...libros, details: libros }));

    setTimeout(() => {
      navigate("/libro");
    }, 750);
  };

  if (libros.length === 0) {
    return <div className="homeDesign">soy Home</div>;
  } else if(LibrosFromRdx.details.length > 0){

    console.log("Estoy dentro", LibrosFromRdx)
    console.log("Devuelveme",LibrosFromRdx.details)
    return (


      <div className="containerDesign">

        <SearchBar />
        <h1 className="titleDesign"> Prestamo de libros</h1>
        <div className="homeDesign">
          {LibrosFromRdx.details.map((libro) => {
            return (
              <div
                onClick={() => clickedLibro(libro)}
                className="libroShow">
                <img
                  className="libroPic"
                  src={libro.image}
                />
              </div>
            );
          })}
        </div>

      </div>



    )


  } else  {
    return (


      <div className="containerDesign">

        <SearchBar />
        <h1 className="titleDesign"> Prestamo de libros</h1>
        <div className="homeDesign">
          {libros.map((libro) => {
            return (
              <div
                onClick={() => clickedLibro(libro)}
                className="libroShow">
                <img
                  className="libroPic"
                  src={libro.image}
                />
              </div>
            );
          })}
        </div>

      </div>



    )
  } 
}
  ;
export default Home;
