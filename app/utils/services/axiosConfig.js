import axios from "axios";
import { API } from "./constants";

const angoliaApi = axios.create({
    baseURL: API,
});

export default angoliaApi;