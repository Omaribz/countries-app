import { Card, CardBody, Image, Text } from "@chakra-ui/react";
import { FetchCountry } from "../services/api-client";
import { Link } from "react-router-dom";

interface CountryProps {
  country: FetchCountry;
}

const CountryCard = ({ country }: CountryProps) => {
  return (
    <Link to={`/country/${country.name.common}`}>
      <Card
        width="264px"
        height="336px"
        overflow="hidden"
        marginBottom="60px"
        _hover={{
          transform: "scale(1.03)",
          transition: "transform .15s ease-in",
        }}
      >
        <Image src={country.flags.png} objectFit="cover" height="55%" />
        <CardBody>
          <Text marginBottom="10px" fontWeight={700}>
            {country.name.common}
          </Text>
          <Text fontSize="13px">
            <strong>Population:</strong> {country.population}
          </Text>
          <Text fontSize="12px">
            <strong>Region:</strong> {country.region}
          </Text>
          <Text fontSize="12px">
            <strong>Capital:</strong> {country.capital}
          </Text>
        </CardBody>
      </Card>
    </Link>
  );
};

export default CountryCard;
