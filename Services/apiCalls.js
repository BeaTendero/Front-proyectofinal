import axios from "axios";
import { libroApi } from "./libroApi";

const dataBase = "http://localhost:3001";

export const loginUser = async (user) => {
  //el user se lo he metido cuando he implementado la funcion en la otra funcion logMe
  let res = await axios.post(dataBase + "/auth/login", user); // Pasariamos un body, que en este caso es user.
  return res;
};

export const registerUser = async (user) => {
  let res = await axios.post(dataBase + "/auth/register", user);
  return res;
};

//Ultimas añadidas(HAY QUE CAMBIAR LOS ENDPOINTS POR LOS DE NUESTRA BASEDEDATOS)
export const bringLibros = async () => {
  let res = await axios.get(dataBase + "/libros");
  console.log(res);

  return res.data;
};

export const searchLibros = async (criteria) => {
  let res = await axios.get(dataBase + "/libros/title/" + criteria);
  console.log("AQUIELRES", res.data);
  return res.data;
};



export const bringUsers = async (jwt) => {
  let res = await axios.get(dataBase + "/users/", {
    headers: { Authorization: `Bearer ${jwt}` },
  })};

  return res.data;
