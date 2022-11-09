import { Container } from "@mui/system";
import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <Container
      style={{
        border: "1px solid white",
        borderRadius: "5px",
      }}
    >
      <p className="Footer">
        Essa página foi desenvolvida em react utilizando react-router-dom,
        material ui. Deploy feito no Netlify. Todo conteudo na página é
        ficticio, nenhuma promoção contida na página é real.
      </p>
      <p >Developed By Dayvid Macedo</p>
    </Container>
  );
};

export default Footer;
