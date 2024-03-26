import { HStack, Text, useColorMode } from "@chakra-ui/react";
import { MdOutlineDarkMode } from "react-icons/md";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack onClick={toggleColorMode} cursor="pointer">
      <MdOutlineDarkMode />
      <Text>{colorMode === "dark" ? "Dark Mode" : "Light Mode"}</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
