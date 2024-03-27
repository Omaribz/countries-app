import { Grid, GridItem, HStack } from "@chakra-ui/react";
import CountriesGrid from "../components/CountriesGrid";
import RegionSelector from "../components/RegionSelector";
import SearchInput from "../components/SearchInput";
import { useState } from "react";

const HomePage = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (searchText: string) => {
    setSearchValue(searchText);
  };

  return (
    <Grid templateAreas={`"search search" "main main"`}>
      <GridItem area="search">
        <HStack display="flex" justifyContent="space-between">
          <SearchInput onSearch={handleSearch} />
          <RegionSelector />
        </HStack>
      </GridItem>
      <GridItem area="main">
        <CountriesGrid searchValue={searchValue} />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
