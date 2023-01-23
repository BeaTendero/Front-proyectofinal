import axios from "axios";

export const libroApi = axios.create({
    baseURL: "https://www.googleapis.com/books/v1",
});


