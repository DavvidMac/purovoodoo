import {
  TextField,
  OutlinedInput,
  InputAdornment,
  FormControl,
  InputLabel,
  Grid,
  Container,
  Box,
  ButtonBase,
  Button,
} from "@mui/material";
import { FiUser, FiPhone } from "react-icons/fi";
import React from "react";
import CepConsult from "../Resources/Viacep";

const Formulary = () => {
  const [nome, setNome] = React.useState("");
  const [tel, setTel] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [cep, setCep] = React.useState("");
  const [rua, setRua] = React.useState("");
  const [num, setNum] = React.useState("");
  const [estado, setEstado] = React.useState("");
  const [cidade, setCidade] = React.useState("");

 async function clicked(){
   const info= await CepConsult(cep)
   alert('Seus dados foram cadastrados com sucesso')
  }

  return (
    <>
      <Box
        style={{
          display: "flex",
          margin: "auto",
        }}
        sx={{
          width: 600,
          height: 300,
        }}
      >
        <Container maxWidth="fixed">
          <h2>Formulario</h2>
          <Grid container spacing={2} margin>
            <Grid item xs={6} md={11}>
              <FormControl fullWidth size="small">
                <InputLabel htmlFor="outlined-adornment-amount">
                  Nome Completo
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  startAdornment={
                    <InputAdornment position="start">
                      <FiUser />
                    </InputAdornment>
                  }
                  label="Nome"
                />
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={2} margin>
            <Grid item xs={6} md={4}>
              <FormControl fullWidth size="small">
                <InputLabel htmlFor="outlined-adornment-amount">
                  Telefone
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  value={tel}
                  onChange={(e) => setTel(e.target.value)}
                  startAdornment={
                    <InputAdornment position="start">
                      <FiPhone />
                    </InputAdornment>
                  }
                  label="Telefone"
                />
              </FormControl>
            </Grid>
            <Grid item xs={6} md={3}>
              <TextField
                id="outlined-basic"
                label="Cep"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <TextField
                id="outlined-basic"
                label="Estado"
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
                variant="outlined"
                size="small"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} margin>
            <Grid item xs={6} md={4}>
              <TextField
                id="outlined-basic"
                label="Cidade"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <TextField
                id="outlined-basic"
                label="Rua"
                value={rua}
                onChange={(e) => setRua(e.target.value)}
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <TextField
                id="outlined-basic"
                label="Numero"
                value={num}
                onChange={(e) => setNum(e.target.value)}
                variant="outlined"
                size="small"
              />
            </Grid>
          </Grid>
          <Button onClick={clicked }>
            Enviar
          </Button>
        </Container>
      </Box>
    </>
  );
};

export default Formulary;
