import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const apiClient = new APIClient('/all')

const useCountries = () => useQuery({
    queryKey: ['countries'],
    queryFn: apiClient.getAll
});

export default useCountries;