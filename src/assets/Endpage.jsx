import React from 'react';


const Endpage = () => {
  return (
    <div className="endpage-container">
       <h1>Olet läpäissyt harjoituksen!</h1>
       <p>Onnittelut upeasta saavutuksesta! 🎉</p>
      <img src= "/onnittelu.jfif" alt="Onnittelukuva" className="endpage-image"  style={{ width: "100%", height: "auto", maxHeight: "65vh", objectFit: "cover"}}/>
     
    </div>
  );
};

export default Endpage;
