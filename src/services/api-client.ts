import axios from "axios";

interface FetchCountry {
    name: string;
    capital: string;
    region: string;
    population: number;
    flag: string;
}

const axiosInstance = axios.create({
    baseURL: " https://restcountries.com/v3.1"
})

class APIClient {
    endpoint: string;

    constructor(endpoint:string) {
        this.endpoint = endpoint
    }

    getAll = () => {
      return axiosInstance
        .get<FetchCountry>(this.endpoint)
        .then(res => res.data)
    }
}

export default APIClient;