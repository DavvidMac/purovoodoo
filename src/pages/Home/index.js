import React from "react";
import Perfume from "../.././Perfume.png";
import { Button, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";

import Footer from '../../Components/Footer';

const Home = () => {
  return (
    <>
      <Container maxWidth="fixed">
        <Grid container spacing={4}>
          <Grid item xs={6} md={6}>
            <img
              src={Perfume}
              alt={"Puro Voodoo"}
              width={(window.screen.width / 12) * 5}
            />
          </Grid>
          <Grid
            item
            xs={6}
            md={4}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h2 style={{ color: "red" }}>Promoção</h2>
            <h1>Puro Voodoo</h1>
            <p >
              Imagine ganhar essa incrivel perfume que contem mais de 15
              fragrancias aromaticas
            </p>
            <Link to={"/Formulario"} style={{ textDecoration: "none" }}>
              <Button variant="outlined">Participar</Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
      <Footer/>
    </>
  );
};

export default Home;
