import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate


const Endpage = () => {
  const navigate = useNavigate();
  return (
    <div className="endpage-container">
       <h1>Olet läpäissyt harjoituksen!</h1>
       <button onClick={() => navigate("/")} className="takaisin-nappi">
        Takaisin alkuun
      </button>
      <p></p>
      <img src= "/onnittelu.jfif" alt="Onnittelukuva" className="endpage-image"  style={{ width: "100%", height: "auto", maxHeight: "65vh", objectFit: "cover"}}/>
     
    </div>
  );
};

export default Endpage;
