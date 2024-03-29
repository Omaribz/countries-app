import axios, { AxiosRequestConfig } from "axios";

export interface FetchCountry {
    name: {
        common: string;
        official: string;
        nativeName: {
            [key: string]: {
                official: string;
                common: string;
            };
        };
    };
    tld: string;
    capital: string;
    region: string;
    subregion: string;
    currencies: { [key: string]: string };
    languages: { [key: string]: string };
    population: number;
    flags: {
        png: string;
        svg: string;
    };
    borders: string[];
}

const axiosInstance = axios.create({
    baseURL: "https://restcountries.com/v3.1"
})

class APIClient{
    endpoint: string;

    constructor(endpoint:string) {
        this.endpoint = endpoint
    }

    getAll = (config: AxiosRequestConfig) => {
      return axiosInstance
        .get(this.endpoint, config)
        .then(res => res.data)
    }

    get = (config: AxiosRequestConfig) => {
        return axiosInstance
        .get(this.endpoint, config)
        .then(res => res.data)
    }
}

export default APIClient;