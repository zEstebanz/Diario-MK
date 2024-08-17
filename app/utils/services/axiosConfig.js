import axios from"axios";
import { API } from"./constants";

const angoliaApi = axios.create({
    baseURL: 'https://hn.algolia.com/api/v1/',  // Asegúrate de usar HTTPS
});

export default angoliaApi;
