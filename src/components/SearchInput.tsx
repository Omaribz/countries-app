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
      marginBottom={{ base: "30px", sm: "30px" }}
      width={{ base: "90%", sm: "90%", md: "30%", lg: "30%" }}
      marginLeft={{ base: "0", sm: "0", md: "90px", lg: "80px" }}
    >
      <InputLeftElement children={<BsSearch />} />
      <Input
        variant="outline"
        placeholder="Search for a country..."
        fontSize="14px"
        ref={searchInputRef}
        onChange={handleSearch}
      />
    </InputGroup>
  );
};

export default SearchInput;
