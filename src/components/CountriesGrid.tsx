import { SimpleGrid } from "@chakra-ui/react";
import useCountries from "../hooks/useCountries";
import CountryCard from "./CountryCard";
import SkeletonCard from "./SkeletonCard";

interface CountryProps {
  searchValue: string;
}

const CountriesGrid = ({ searchValue }: CountryProps) => {
  const { data, isPending } = useCountries();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  const filteredCountry = data?.filter((country) =>
    country.name.common.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <SimpleGrid
      columns={{ base: 1, sm: 2, md: 2, lg: 3, xl: 4 }}
      spacingX="74px"
      paddingX="80px"
    >
      {isPending &&
        skeletons.map((skeleton) => <SkeletonCard key={skeleton} />)}
      {filteredCountry &&
        filteredCountry.map((country, index) => (
          <CountryCard key={index} country={country} />
        ))}
    </SimpleGrid>
  );
};

export default CountriesGrid;
