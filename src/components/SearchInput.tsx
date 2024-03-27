import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface SearchInputProps {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: SearchInputProps) => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (searchInputRef.current) {
      const searchText = searchInputRef.current.value.trim();
      onSearch(searchText);
    }
  };
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
        ref={searchInputRef}
        onChange={handleSearch}
        // _placeholder={{ opacity: 1, color: "#fff" }}
      />
    </InputGroup>
  );
};

export default SearchInput;
