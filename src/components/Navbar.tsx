import { Container, Flex, Spacer, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <Container maxW="100%" paddingY="20px" paddingX="80px" boxShadow="md">
      <Flex>
        <Text fontWeight="700" fontSize="20px">
          Where in the world?
        </Text>
        <Spacer />
        <ColorModeSwitch />
      </Flex>
    </Container>
  );
};

export default Navbar;
