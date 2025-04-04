import React, { useState } from 'react';
import './Asking.css'
//import { useNavigate } from 'react-router-dom'; // Import useNavigate
//import Asking2 from './Asking3';

function Asking3() {
  const [symbols, setSymbols] = useState({
    He: '',
    I: '',
    Ca: '',
    Mg: '',
    Na: '',
    Si: '',
    U: '',
    Sn: '',
    S: '',
    Rn: ''
    
  });

//const navigate = useNavigate(); // Initialize navigation

  const correctSymbols = {
    He: "helium",
    I: "jodi",
    Ca: "kalsium",
    Mg: "magnesium",
    Na: "natrium",
    Si: "pii",
    U: "uraani",
    Sn: "tina",
    S: "rikki",
    Rn: "radon"
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSymbols({ ...symbols, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkSymbols(); // Kutsutaan tarkistusfunktiota
    //alert(`Syötetyt kemialliset merkit:\nO: ${symbols.O}\nH: ${symbols.H}\nC: ${symbols.C}\nN: ${symbols.N}`);
  };


  const checkSymbols = () => {
    let correct = true; // Oletusarvoisesti kaikki oikein
    let message = "Tarkistusraportti:\n";
  
    Object.keys(symbols).forEach((key) => {
      if (symbols[key].toLowerCase() === correctSymbols[key].toLowerCase()) {
        message += `${key}: Oikein!\n`;
      } else {
        message += `${key}: Väärin. Oikea vastaus on ${correctSymbols[key]}.\n`;
        correct = false; // Merkataan jokin arvo vääräksi
      }
    });
  
    if (correct) {
      alert("Kaikki vastaukset ovat oikein!");
      //navigate("/asking3"); // Navigate to Asking3
    } else {
      alert(message);
    }
  };
  

  return (
    <div>
      <h1>Kemialliset merkit 3</h1>
      <form onSubmit={handleSubmit}>
        <label>
          He
          <input
            type="text"
            name="He"
            value={symbols.He}
            style={{ marginLeft: "10px" }}
            autocomplete="off"
            onChange={handleChange}
          />
        </label>
        <br />
       
        <label>
          I
          <input
            type="text"
            name="I"
            value={symbols.I}
            style={{ marginLeft: "18px" }}
            autocomplete="off"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Ca
          <input
            type="text"
            name="Ca"
            value={symbols.Ca}
            style={{ marginLeft: "10px" }}
            autocomplete="off"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Mg
          <input
            type="text"
            name="Mg"
            value={symbols.Mg}
            style={{ marginLeft: "10px" }}
            autocomplete="off"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Na
          <input
            type="text"
            name="Na"
            value={symbols.Na}
            style={{ marginLeft: "10px" }}
            autocomplete="off"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Si
          <input
            type="text"
            name="Si"
            value={symbols.Si}
            style={{ marginLeft: "15px" }}
            autocomplete="off"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          U
          <input
            type="text"
            name="U"
            value={symbols.U}
            style={{ marginLeft: "18px" }}
            autocomplete="off"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Sn
          <input
            type="text"
            name="Sn"
            value={symbols.Sn}
            style={{ marginLeft: "15px" }}
            autocomplete="off"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          S
          <input
            type="text"
            name="S"
            value={symbols.S}
            style={{ marginLeft: "18px" }}
            autocomplete="off"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Rn
          <input
            type="text"
            name="Rn"
            value={symbols.Rn}
            style={{ marginLeft: "10px" }}
            autocomplete="off"
            onChange={handleChange}
          />
        </label>
        <br />
        <br />

        
        <p>
        <button type="submit">Lähetä</button>
        </p>
      </form>
    </div>
  );
}



export default Asking3;
