import { Box, Container, Typography } from "@mui/material";
import QuiltedImageList from "../components/ImageCollage";
import React from "react";
import CustomizedAccordions from "../components/Accordian";

function Tour() {
  return (
    <Container>
      <Typography variant="h2" component="h2" marginTop={3}>
        Explore Las Vegas
      </Typography>
      <Box sx={{ display: "flex" }} marginTop={2}>
        <img
          src="https://media.timeout.com/images/105124791/750/422/image.jpg"
          height={325}
          alt="Tour"
         />
        <QuiltedImageList />
      </Box>
      <Box>
        <Typography variant="h6" component="h3" marginTop={3}>
          About Us
        </Typography>
        <Typography variant="paragraph" component="p" marginTop={3}>
          This is details for the about us
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" component="h3" marginTop={3} marginBottom={3}>
          FAQ
        </Typography>
        <CustomizedAccordions />
      </Box>
    </Container>
  );
}

export default Tour;
