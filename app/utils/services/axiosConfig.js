import axios from "axios";
import { API } from "./constants";

const angoliaApi = axios.create({
    baseURL: API,
});

axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'https://diario-mk.vercel.app';

export default angoliaApi;