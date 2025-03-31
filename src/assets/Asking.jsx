import React, { useState } from 'react';
import './Asking.css'

function Asking() {
  const [symbols, setSymbols] = useState({
    O: '',
    H: '',
    C: '',
    N: '',
    Ne: '',
    Al: '',
    Cu: '',
    Ag: '',
    Au: '',
    Ni: ''
  });

  const correctSymbols = {
    O: "happi",
    H: "vety",
    C: "hiili",
    N: "typpi",
    Ne: "neon",
    Al: "alumiini",
    Cu: "kupari",
    Ag: "hopea",
    Au: "kulta",
    Ni: "nikkeli",
    Zn: "sinkki",
    Pb: "lyijy",
    Cl: "kloori",
    Fe: "rauta",
    K: "kalium"
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

    } else {
      alert(message);
    }
  };
  

  return (
    <div>
      <h1>Kemialliset merkit</h1>
      <form onSubmit={handleSubmit}>
        <label>
          O
          <input
            type="text"
            name="O"
            value={symbols.O}
            style={{ marginLeft: "20px" }}
            autocomplete="off"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          H
          <input
            type="text"
            name="H"
            value={symbols.H}
            style={{ marginLeft: "20px" }}
            autocomplete="off"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          C
          <input
            type="text"
            name="C"
            value={symbols.C}
            style={{ marginLeft: "20px" }}
            autocomplete="off"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          N
          <input
            type="text"
            name="N"
            value={symbols.N}
            style={{ marginLeft: "20px" }}
            autocomplete="off"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Ne
          <input
            type="text"
            name="Ne"
            value={symbols.Ne}
            style={{ marginLeft: "10px" }}
            autocomplete="off"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Al
          <input
            type="text"
            name="Al"
            value={symbols.Al}
            style={{ marginLeft: "10px" }}
            autocomplete="off"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Cu
          <input
            type="text"
            name="Cu"
            value={symbols.Cu}
            style={{ marginLeft: "10px" }}
            autocomplete="off"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Ag
          <input
            type="text"
            name="Ag"
            value={symbols.Ag}
            style={{ marginLeft: "10px" }}
            autocomplete="off"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Au
          <input
            type="text"
            name="Au"
            value={symbols.Au}
            style={{ marginLeft: "10px" }}
            autocomplete="off"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Ni
          <input
            type="text"
            name="Ni"
            value={symbols.Ni}
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



export default Asking;
