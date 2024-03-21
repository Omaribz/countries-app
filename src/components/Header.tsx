import { HStack, Text } from "@chakra-ui/react";
import { MdOutlineDarkMode } from "react-icons/md";

const Header = () => {
  return (
    <HStack
      display="flex"
      justifyContent="space-between"
      paddingY="15px"
      paddingX="60px"
      fontSize="18px"
      fontWeight={500}
      backgroundColor="#2B3844"
    >
      <Text>Where in the world?</Text>
      <HStack>
        <MdOutlineDarkMode />
        <Text>Dark Mode</Text>
      </HStack>
    </HStack>
  );
};

export default Header;
