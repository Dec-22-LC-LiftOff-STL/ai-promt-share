import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000', mode: "cors"})


export const createUser = (newUser) =>  API.post("/users/signup", newUser);

export const ApiUserLogin = (UserLogin) =>  API.post("/users/Login", UserLogin);

export const createPost = (newPost) =>  API.post("/posts/createPost", newPost);


