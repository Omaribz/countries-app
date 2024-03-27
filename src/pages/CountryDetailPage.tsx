import { useNavigate, useParams } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";
import useCountry from "../hooks/useCountry";
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

const CountryDetailPage = () => {
  const { name } = useParams();
  const { data } = useCountry(name!);
  const navigate = useNavigate();

  return (
    <>
      <Button
        marginY="60px"
        marginLeft="80px"
        width="136px"
        height="40px"
        boxShadow="md"
        onClick={() => navigate("/")}
      >
        <HStack>
          <MdKeyboardBackspace />
          <Text>Back</Text>
        </HStack>
      </Button>
      <Container maxW="100%" paddingLeft="80px">
        <Flex>
          <Image
            src={data[0].flags.png}
            width="560px"
            height="350px"
            borderRadius="7px"
          />
          <Container
            marginLeft="100px"
            width="574px"
            height="323px"
            paddingTop="30px"
          >
            <Heading fontSize="25px">{data && data[0].name.common}</Heading>
            <Box
              fontSize="13px"
              fontWeight={250}
              lineHeight={2}
              letterSpacing={0.2}
            >
              <HStack>
                <Box width="207px" height="160px" marginRight="100px">
                  <Text>
                    <strong>Native Name:</strong> {data[0].name.common}
                  </Text>
                  <Text>
                    <strong>Population:</strong> {data[0].population}
                  </Text>
                  <Text>
                    <strong>Region:</strong> {data[0].region}
                  </Text>
                  <Text>
                    <strong>Sub-region:</strong> {data[0].subregion}
                  </Text>
                  <Text>
                    <strong>Capital:</strong> {data[0].capital}
                  </Text>
                </Box>
                <Box width="249px" height="196px" marginTop="35px">
                  <Text>
                    <strong>Top Level Domain:</strong> {data[0].tld}
                  </Text>
                  <Text>
                    <strong>Currencies:</strong> {data[0].currencies.EURO}
                  </Text>
                  <Text>
                    <strong>Languages:</strong> {data[0].languages.ell}
                  </Text>
                </Box>
              </HStack>
            </Box>
            <Text>
              <strong>Border Countries:</strong> {data[0].languages.ell}
            </Text>
          </Container>
        </Flex>
      </Container>
    </>
  );
};

export default CountryDetailPage;
