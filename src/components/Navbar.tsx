import { Container, Flex, Spacer, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <Container
      maxW="100%"
      paddingY="20px"
      boxShadow="md"
      fontSize={{ base: "15px", sm: "15px", md: "16px", lg: "16px" }}
      paddingRight={{ base: "10px", sm: "10px", md: "90px", lg: "90px" }}
      paddingLeft={{ base: "10px", sm: "10px", md: "90px", lg: "90px" }}
    >
      <Flex>
        <Text fontWeight="500">Where in the world?</Text>
        <Spacer />
        <ColorModeSwitch />
      </Flex>
    </Container>
  );
};

export default Navbar;
