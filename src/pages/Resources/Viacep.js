import { json } from "react-router-dom";

const CepConsult = async function(cep) {
    const url =
      `http://viacep.com.br/ws/${cep}/json/`
    try {
      const response = await fetch(url);
      const json = await response.json();
    } catch (err) {
      console.error(err);   
    }
    return json
};
 
export default CepConsult;