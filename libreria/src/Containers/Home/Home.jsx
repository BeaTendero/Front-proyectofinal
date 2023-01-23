import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { bringBooks } from "../../Services/apiCalls";
import { useSelector, useDispatch } from "react-redux";
import { userData } from "../User/userSlice";
import {libroData, addLibro} from "../Libros/LibrosSlice"


import "./Home.scss";
import SearchBar from "../../Componentes/SearchBar/SearchBar";


const Home = () => {
  //Me conecto a RDX en modo lectura.
  const LibrosFromRdx = useSelector(libroData);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  //Hooks
  const [books, setBooks] = useState([]);

  useEffect(() => {
    console.log("soy los libros de redux", LibrosFromRdx)
    if (books.length === 0) {
      bringBooks()
        .then((books) => {
          setBooks(books);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  const clickedBook = (book) => {
    //Guardo el libro seleccionado en redux.

    dispatch(addLibro({ ...book, details: book }));

    setTimeout(() => {
      navigate("/libro");
    }, 750);
  };

  if (books.length === 0) {
    return <div className="homeDesign">soy Home</div>;
  } else if(LibrosFromRdx.details.length > 0){

    console.log("Estoy dentro", LibrosFromRdx)
    console.log("Devuelveme",LibrosFromRdx.details)
    return (


      <div className="containerDesign">

        <SearchBar />
        <h1 className="titleDesign"> Prestamo de libros</h1>
        <div className="homeDesign">
          {LibrosFromRdx.details.map((book) => {
            return (
              <div
                onClick={() => clickedBook(book)}
                className="bookShow">
                <img
                  className="bookPic"
                  src={book.image}
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
          {books.map((book) => {
            return (
              <div
                onClick={() => clickedBook(book)}
                className="bookShow">
                <img
                  className="bookPic"
                  src={book.image}
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
