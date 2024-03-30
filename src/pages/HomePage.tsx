import { Box, Grid, GridItem, Spacer } from "@chakra-ui/react";
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
        <Box
          display="flex"
          flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}
          marginTop="20px"
          marginBottom={{ base: "0", sm: "0", md: "40px", lg: "40px" }}
          marginX={{ base: "20px", md: "0", lg: "0" }}
        >
          <SearchInput onSearch={handleSearch} />
          <Spacer />
          <FilterRegion setSelectedRegion={setSelectedRegion} />
        </Box>
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
