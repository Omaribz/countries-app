import { Grid, GridItem, HStack } from "@chakra-ui/react";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import RegionSelector from "./components/RegionSelector";
import CountriesCard from "./components/CountriesCard";

function App() {
  return (
    <Grid templateAreas={`"nav nav" "search search" "main main"`}>
      <GridItem area="nav">
        <Header />
      </GridItem>
      <GridItem area="search">
        <HStack display="flex" justifyContent="space-between">
          <SearchInput />
          <RegionSelector />
        </HStack>
      </GridItem>
      <GridItem area="main">
        <CountriesCard />
      </GridItem>
    </Grid>
  );
}

export default App;
