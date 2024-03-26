import { Grid, GridItem, HStack } from "@chakra-ui/react";
import CountriesGrid from "../components/CountriesGrid";
import RegionSelector from "../components/RegionSelector";
import SearchInput from "../components/SearchInput";

const HomePage = () => {
  return (
    <Grid templateAreas={`"search search" "main main"`}>
      <GridItem area="search">
        <HStack display="flex" justifyContent="space-between">
          <SearchInput />
          <RegionSelector />
        </HStack>
      </GridItem>
      <GridItem area="main">
        <CountriesGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
