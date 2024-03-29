import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const useCountry = (name: string ) => {
    
    const apiClient = new APIClient(`/name/${name}?fullText=true`);

    return useQuery({
    queryKey: ['country', name],
    queryFn: apiClient.get,
    staleTime: 24 * 60 * 60 * 1000
});
}
export default useCountry;