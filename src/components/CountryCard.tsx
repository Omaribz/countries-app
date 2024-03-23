import { Card, CardBody, Image, Text } from "@chakra-ui/react";
import { FetchCountry } from "../services/api-client";

interface CountryProps {
  country: FetchCountry;
}

const CountryCard = ({ country }: CountryProps) => {
  return (
    <Card width="264px" height="336px" overflow="hidden" marginBottom="60px">
      <Image src={country.flags.png} objectFit="cover" height="45%" />
      <CardBody>
        <Text marginBottom="10px" fontWeight={700}>
          {country.name.common}
        </Text>
        <Text fontSize="13px">Population: {country.population}</Text>
        <Text fontSize="13px">Region: {country.region}</Text>
        <Text fontSize="13px">Capital: {country.capital}</Text>
      </CardBody>
    </Card>
  );
};

export default CountryCard;
