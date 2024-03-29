import { Grid, GridItem, HStack } from "@chakra-ui/react";
import CountriesGrid from "../components/CountriesGrid";
import SearchInput from "../components/SearchInput";
import { useState } from "react";
import FilterRegion from "../components/FilterRegion";

const HomePage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const handleSearch = (searchText: string) => {
    setSearchValue(searchText);
  };

  return (
    <Grid templateAreas={`"search search" "main main"`}>
      <GridItem area="search">
        <HStack
          display="flex"
          justifyContent="space-between"
          flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}
        >
          <SearchInput onSearch={handleSearch} />
          <FilterRegion setSelectedRegion={setSelectedRegion} />
        </HStack>
      </GridItem>
      <GridItem area="main">
        <CountriesGrid
          searchValue={searchValue}
          selectedRegion={selectedRegion}
        />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
