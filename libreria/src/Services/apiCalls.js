import axios from "axios";
import { libroApi } from "./libroApi";

const dataBase = "http :// localhost:3001";

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
export const bringBooks = async () => {
  let res = await axios.get(dataBase + "/books");
  console.log(res);

  return res.data;
};

export const searchBooks = async (criteria) => {
  // let res = await axios.get(dataBase + "/books/title/" + criteria);
  // console.log("AQUIELRES", res.data);
  // return res.data;
  const res = await libroApi.get(``);

  return res.data.results;
};



export const bringUsers = async (jwt) => {
  let res = await axios.get(dataBase + "/users/", {
    headers: { Authorization: `Bearer ${jwt}` },
  })

  return res.data;
};

export const eraseUser = async (notMail, jwt) => {
  let res = await axios.delete(dataBase + "/users/deleteUser/" + notMail, {
    headers: { Authorization: `Bearer ${jwt}` },
  });

  return res.data;
};


export const rentBook = async (body, jwt) => {
  let res = await axios.post(
    dataBase + "/orders/newOrderBook", body,
    { headers: { Authorization: `Bearer ${jwt}` } },
  );
  console.log("Estoy dentro de rentBook", res)
  console.log(res.data)
  return res;
};