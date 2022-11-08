import React from "react";
import {
  Button,
  Container,
  Box,
} from "@mui/material";
const Home = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Box
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.dark",
            "&:hover": {
              backgroundColor: "primary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
      </Container>
      <Button variant="outlined">Participar</Button>
    </>
  );
};

export default Home;
