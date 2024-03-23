import axios from "axios";

export interface FetchCountry {
    name: {
        common: string;
        official: string;
    }
    capital: string;
    region: string;
    population: number;
    flags: {
        png: string;
        svg: string;
    }
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
        .get<FetchCountry[]>(this.endpoint)
        .then(res => res.data)
    }
}

export default APIClient;