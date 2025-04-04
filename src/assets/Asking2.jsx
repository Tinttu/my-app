import React, { useState } from 'react';
import './Asking.css'

function Asking2() {
  const [symbols, setSymbols] = useState({
    Br: '',
    Zn: '',
    Pb: '',
    Cl: '',
    Fe: '',
    K: ''
  });

  const correctSymbols = {
    Br: "bromi",
    Zn: "sinkki",
    Pb: "lyijy",
    Cl: "kloori",
    Fe: "rauta",
    K: "kalium",
    Hg: "elohopea",
    P: "fosfori",
    F: "fluori",
    Ge: "germanium"
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
      <h1>Kemialliset merkit 2</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Br
          <input
            type="text"
            name="Br"
            value={symbols.Br}
            style={{ marginLeft: "10px" }}
            autocomplete="off"
            onChange={handleChange}
          />
        </label>
        <br />
       
        <label>
          Zn
          <input
            type="text"
            name="Zn"
            value={symbols.Zn}
            style={{ marginLeft: "10px" }}
            autocomplete="off"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Pb
          <input
            type="text"
            name="Pb"
            value={symbols.Pb}
            style={{ marginLeft: "10px" }}
            autocomplete="off"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Cl
          <input
            type="text"
            name="Cl"
            value={symbols.Cl}
            style={{ marginLeft: "10px" }}
            autocomplete="off"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Fe
          <input
            type="text"
            name="Fe"
            value={symbols.Fe}
            style={{ marginLeft: "10px" }}
            autocomplete="off"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          K
          <input
            type="text"
            name="K"
            value={symbols.K}
            style={{ marginLeft: "15px" }}
            autocomplete="off"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Hg
          <input
            type="text"
            name="Hg"
            value={symbols.Hg}
            style={{ marginLeft: "10px" }}
            autocomplete="off"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          F
          <input
            type="text"
            name="F"
            value={symbols.F}
            style={{ marginLeft: "15px" }}
            autocomplete="off"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          P
          <input
            type="text"
            name="P"
            value={symbols.P}
            style={{ marginLeft: "15px" }}
            autocomplete="off"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Ge
          <input
            type="text"
            name="Ge"
            value={symbols.Ge}
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



export default Asking2;
