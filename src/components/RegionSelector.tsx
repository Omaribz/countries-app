import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const RegionSelector = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}
        marginRight="80px"
        // bg="#2B3844"
        // _hover={{ bg: "#2B3844" }}
        width="220px"
      >
        Filter by Region
      </MenuButton>
      <MenuList>
        <MenuItem>Africa</MenuItem>
        <MenuItem>America</MenuItem>
        <MenuItem>Asia</MenuItem>
        <MenuItem>Europe</MenuItem>
        <MenuItem>Oceania</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default RegionSelector;
