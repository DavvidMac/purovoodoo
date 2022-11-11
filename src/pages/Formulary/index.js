  import { TextField, OutlinedInput, InputAdornment, FormControl, InputLabel, Grid, Container } from '@mui/material'
import { FiUser, FiPhone } from 'react-icons/fi'
import React from 'react'

const Formulary = () => {
  return (
    <>
      <Container maxWidth="fixed">
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <FormControl fullWidth sx={{ m: 1 }} size="small">
              <InputLabel htmlFor="outlined-adornment-amount">Nome Completo</InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value=''
                onChange=''
                startAdornment={<InputAdornment position="start"><FiUser /></InputAdornment>}
                label="Nome"
              />
            </FormControl>
          </Grid>
          <Grid item xs={6} md={4}>
            <FormControl sx={{ m: 1 }} size="small">
              <InputLabel htmlFor="outlined-adornment-amount">Telefone</InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value=''
                onChange=''
                startAdornment={<InputAdornment position="start"><FiPhone /></InputAdornment>}
                label="Telefone"
              />
            </FormControl>
          </Grid>
        </Grid>
        </Container>
        <Container maxWidth="fixed">
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <TextField id="outlined-basic" label="Cep" variant="outlined" size="small" />
          </Grid>
          <Grid item xs={6} md={4}>
            <TextField id="outlined-basic" label="Estado" variant="outlined" size="small" />
          </Grid>
          <Grid item xs={6} md={4}>
            <TextField id="outlined-basic" label="Cidade" variant="outlined" size="small" />
          </Grid>
          <Grid item xs={6} md={4}>
            <TextField id="outlined-basic" label="Rua" variant="outlined" size="small" />
          </Grid>
        </Grid>
        </Container>
    </>
  )
}

export default Formulary