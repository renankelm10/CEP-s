import '../css/style.css';
import { getCEPData } from "./fetchCEP.js";

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Qual seu CEP?</h1>
    <div>
      <form id="cepForm"> 
        <input type="text" name="cep" id="cep_field">
        <button type="button" id="cep_get">GET</button> <!-- Mudei type para "button" para evitar refresh -->
      </form>
    </div>
    <h2 id="cep">-</h2>
  </div>
`;

document.getElementById('cep_get').addEventListener('click', () => {
    const cepInput = document.getElementById('cep_field').value;
    getCEPData(document.getElementById('cep'), cepInput);
});