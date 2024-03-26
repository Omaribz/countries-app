import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup
      marginY="40px"
      width="30%"
      marginLeft="80px"
      // backgroundColor="#2B3844"
    >
      <InputLeftElement children={<BsSearch />} />
      <Input
        variant="outline"
        placeholder="Search for a country..."
        fontSize="14px"
        // _placeholder={{ opacity: 1, color: "#fff" }}
      />
    </InputGroup>
  );
};

export default SearchInput;
