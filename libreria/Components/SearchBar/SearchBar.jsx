import React, { useState, useEffect } from "react";
import { addSearch, cleanSearch } from "../../containers/Libros/LibrosSlice";
import { searchLibros } from "../../services/apiCalls";
import { useDispatch } from "react-redux";
import './SearchBar.scss'


const SearchBar = () => {

    const dispatch = useDispatch();

    //HOOK
    const [criteria, setCriteria] = useState('');


    //HANDLER
    const criteriaHandler = (e) => {
        setCriteria(e.target.value);
    }



    useEffect(() => {

        if (criteria !== '') {

            //Debounce....
            const bring = setTimeout(() => {
                searchLibros(criteria)
                    .then(res => {
                        console.log("que ha pasado???? ", res);

                        //Ahora que tengo los Libros...los guardo en redux....
                        dispatch(addSearch({ details: res}))
                        console.log("ESTE ES EL SEARCH",res)
                    })
                    .catch(error => console.log((error)));
            }, 350);
            return () => clearTimeout(bring);

        } else if (criteria === '') {
            //Guardo en RDX libros vacíos...
            dispatch(cleanSearch({ details: {} }))
        }
    }, [criteria]);

    return (
        <div className='divInputDesign'>
            <div className="search-box">
                <button className="btn-search"><i className="fas fa-search"></i></button>
                <input type="text" name="criteria" className="input-search" placeholder="Busqueda de libros" onChange={(e) => criteriaHandler(e)} />
            </div>

        </div>
    )




}


export default SearchBar;