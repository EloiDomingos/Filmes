import axios from "axios";

// Base da URL: https://api.themoviedb.org/3/
// URL da API: /movie/now_playing?api_key=26b36f3d4d62377d7876cb1605553e02&language=pt-br

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;
