import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

export interface SearchCountryProps {
  setSelectedRegion: (region: string) => void;
}

const FilterRegion = ({ setSelectedRegion }: SearchCountryProps) => {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const handleRegionChange = (region: string) => {
    setSelectedRegion(region);
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}
        marginRight={{
          base: "150px",
          sm: "150px",
          md: "90px",
          lg: "50px",
          xl: "80px",
        }}
        width={{ base: "50%", sm: "50%", md: "22%", lg: "18%", xl: "12%" }}
        marginBottom={{ base: "40px", lg: "0" }}
      >
        Filter by Region
      </MenuButton>
      <MenuList>
        {regions.map((region) => (
          <MenuItem key={region} onClick={() => handleRegionChange(region)}>
            {region}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default FilterRegion;
