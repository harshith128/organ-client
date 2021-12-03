import axios from "axios"

export const organs = axios.create({
    baseURL: "https://organ-backend-server.herokuapp.com/"
})

organs.interceptors.request.use(function (config) {
    // Do something before request is sent
   console.log("intercepted")  
   return config;
})