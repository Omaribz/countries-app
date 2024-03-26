import { Grid, GridItem, HStack } from "@chakra-ui/react";
import SearchInput from "./components/SearchInput";
import RegionSelector from "./components/RegionSelector";
import CountriesGrid from "./components/CountriesGrid";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Grid templateAreas={`"nav nav" "search search" "main main"`}>
      <GridItem area="nav">
        <Navbar />
      </GridItem>
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
}

export default App;
