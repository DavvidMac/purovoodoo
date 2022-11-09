import React from "react";
import Perfume from "../.././Perfume.png";
import { Button, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";

import Footer from '../../Components/Footer';

const Home = () => {
  const [on,setOn]=React.useState(true)
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
            <h2 style={{ color: "red" }}>Sorteio</h2>
            <h1>Puro Voodoo</h1>
            <p >
              Imagine ganhar essa incrivel perfume que contem mais de 20
              fragrancias aromaticas.
            </p>
            <Link to={"/Formulario"} style={{ textDecoration: "none" }}>
              <Button variant="outlined">Participar</Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
      {on && <Footer style={{marginBottom:'0'}}/>}
    </>
  );
};

export default Home;
