import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const useCountry = (name: string ) => {
    const apiClient = new APIClient(`/name/${name}`);

    return useQuery({
    queryKey: ['countries'],
    queryFn: apiClient.get,
});
}
export default useCountry;