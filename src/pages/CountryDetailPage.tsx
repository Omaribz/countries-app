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
  Skeleton,
  SkeletonText,
  Text,
  VStack,
} from "@chakra-ui/react";

const CountryDetailPage = () => {
  const { name } = useParams();
  const { data, isPending } = useCountry(name!);
  const navigate = useNavigate();

  return (
    <>
      <Container maxW="90%">
        <Flex>
          <Button
            marginY="60px"
            width={{ base: "100px", lg: "136px" }}
            height="40px"
            boxShadow="md"
            onClick={() => navigate("/")}
          >
            <HStack>
              <MdKeyboardBackspace />
              <Text>Back</Text>
            </HStack>
          </Button>
        </Flex>
        {isPending && (
          <Flex
            flexDirection={{
              base: "column",
              sm: "column",
              md: "row",
              lg: "row",
            }}
          >
            <Skeleton
              width={{ base: "300px", sm: "300px", md: "560px", lg: "560px" }}
              height={{ base: "200px", sm: "200px", md: "401px", lg: "401px" }}
              borderRadius="7px"
              marginRight={{ base: 0, sm: "0", md: "50px", lg: "80px" }}
            />
            <SkeletonText
              width="50%"
              mt="2"
              noOfLines={10}
              spacing="5"
              skeletonHeight="2"
              marginTop="20px"
            />
          </Flex>
        )}
        {data && (
          <Flex
            flexDirection={{
              base: "column",
              sm: "column",
              md: "row",
              lg: "row",
            }}
          >
            <Image
              src={data[0].flags.png}
              width={{ base: "300px", sm: "300px", md: "560px", lg: "560px" }}
              height={{ base: "auto", sm: "auto", md: "401px", lg: "401px" }}
              borderRadius="7px"
              marginRight={{ base: 0, sm: "0", md: "50px", lg: "80px" }}
            />
            <Box>
              <Box paddingTop="30px">
                <Heading fontSize="25px">{data[0].name.common}</Heading>
              </Box>
              <Box
                fontSize="13px"
                fontWeight={250}
                lineHeight={2}
                letterSpacing={0.2}
              >
                <Flex
                  flexDirection={{
                    base: "column",
                    sm: "column",
                    md: "row",
                    lg: "row",
                  }}
                >
                  <VStack alignItems="flex-start">
                    <Box
                      width="207px"
                      height={{
                        base: "auto",
                        sm: "auto",
                        md: "196px",
                        lg: "160px",
                      }}
                      marginRight="100px"
                      // marginLeft={{ base: "50px", sm: "50px", md: "0", lg: "0" }}
                      marginTop="20px"
                    >
                      <Text>
                        <strong>Native Name:</strong>{" "}
                        {Object.keys(data[0].name.nativeName)[0]}
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
                  </VStack>
                  <VStack alignItems="flex-start">
                    <Box
                      width="249px"
                      height={{
                        base: "auto",
                        sm: "auto",
                        md: "196px",
                        lg: "196px",
                      }}
                      marginTop="20px"
                      alignItems={"flex-start"}
                      marginBottom="30px"
                    >
                      <Text>
                        <strong>Top Level Domain:</strong> {data[0].tld}
                      </Text>
                      <Text>
                        <strong>Currencies:</strong>{" "}
                        {
                          data[0].currencies[Object.keys(data[0].currencies)[0]]
                            .name
                        }
                      </Text>
                      <Text>
                        <strong>Languages:</strong>{" "}
                        {Object.values(data[0].languages).join(", ")}
                      </Text>
                    </Box>
                  </VStack>
                </Flex>
              </Box>
              {data[0].borders && (
                <Text marginRight="10px" fontWeight={500} marginBottom="10px">
                  Border countries:{" "}
                </Text>
              )}
              <Flex
                flexDirection="row"
                justifyContent="space-between"
                flexWrap="wrap"
                marginBottom="20px"
              >
                {data[0].borders &&
                  data[0].borders.map((border: string) => {
                    return (
                      <Box
                        key={border}
                        boxShadow="lg"
                        marginRight="5px"
                        paddingTop="5px"
                        paddingBottom="5px"
                        paddingLeft="20px"
                        paddingRight="20px"
                        borderRadius="5px"
                      >
                        {border}
                      </Box>
                    );
                  })}
              </Flex>
            </Box>
          </Flex>
        )}
      </Container>
    </>
  );
};

export default CountryDetailPage;
