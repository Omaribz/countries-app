import { Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <Grid templateAreas={`"nav nav" "search search" "main main"`}>
      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>
      <GridItem area="search" bg="gold">
        Search
      </GridItem>
      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
