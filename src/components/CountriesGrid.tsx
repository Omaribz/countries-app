import { SimpleGrid } from "@chakra-ui/react";
import useCountries from "../hooks/useCountries";
import CountryCard from "./CountryCard";

const CountriesGrid = () => {
  const { data } = useCountries();

  return (
    <SimpleGrid
      columns={{ base: 1, sm: 2, md: 2, lg: 3, xl: 4 }}
      spacingX="74px"
      paddingX="80px"
    >
      {data &&
        data.map((country, index) => (
          <CountryCard key={index} country={country} />
        ))}
    </SimpleGrid>
  );
};

export default CountriesGrid;
