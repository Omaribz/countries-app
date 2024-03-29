import { HStack, Text, useColorMode } from "@chakra-ui/react";
import { MdOutlineDarkMode } from "react-icons/md";
import { PiSunLight } from "react-icons/pi";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack onClick={toggleColorMode} cursor="pointer">
      {colorMode === "light" ? <MdOutlineDarkMode /> : <PiSunLight />}
      <Text whiteSpace="nowrap">
        {colorMode === "dark" ? "Light Mode" : "Dark Mode"}
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
