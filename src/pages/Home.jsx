import React from "react";

import { Container, Grid, Typography } from "@mui/material";
import cities from "../data.json";
import TourCard from "../components/tourCard";
function Home() {
  return (
    <div className="App">
      <Container>
        {cities.map((city) => (
          <>
            <Typography variant="h4" component="h4">
              Top {city.name} Tours
            </Typography>
            <Grid container spacing={3} sx={{ marginY: 5 }}>
              {city.tours.map((tour) => (
                <TourCard tour={tour} />
              ))}
            </Grid>
          </>
        ))}
      </Container>
    </div>
  );
}

export default Home;
