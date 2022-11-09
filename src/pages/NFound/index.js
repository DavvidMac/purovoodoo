import React from "react";
import Risk from "../../Risk.jpg";
const Nfound = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img
        src={Risk}
        alt={"Perigo"}
        width={400}
        style={{
          marginTop: "14px",
          borderRadius: "50%",
          border: "solid 3px white",
        }}
      />
      <h1>404</h1>
      <h3 style={{ width: "400px" }}>
        Foi mal carinha, essa pagina eu não tenho, mas, se precisar de easter
        egg...{" "}
      </h3>
    </div>
  );
};

export default Nfound;
