import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";

const Header = () => {
    
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        ></IconButton>
        <Typography variant="h4" color="inherit" component="div">
          Goldstein's
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
