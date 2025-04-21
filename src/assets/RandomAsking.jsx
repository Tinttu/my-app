import React, { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function RandomAsking() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Alustetaan navigointifunktio

  // Tietokanta kemiallisista merkeistä ja aineista
  const symbolsData = [
    { symbol: "O", name: "happi" },
    { symbol: "H", name: "vety" },
    { symbol: "C", name: "hiili" },
    { symbol: "N", name: "typpi" },
    { symbol: "Ne", name: "neon" },
    { symbol: "Al", name: "alumiini" },
    { symbol: "Cu", name: "kupari" },
    { symbol: "Ag", name: "hopea" },
    { symbol: "Au", name: "kulta" },
    { symbol: "Ni", name: "nikkeli" }
  ];

  // Shuffle-funktio satunnaistaa kysymysten järjestyksen
  const shuffleQuestions = () => {
    const shuffled = [...symbolsData].sort(() => Math.random() - 0.5);
    setQuestions(shuffled);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers({ ...answers, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkAnswers();
  };

  const checkAnswers = () => {
    let isCorrect = true;
    let resultMessage = "Tarkistusraportti:\n";

    questions.forEach((item) => {
      if (answers[item.name] === item.symbol) {
        // Vertaillaan käyttäjän vastausta (symbol) oikeaan symboliin
        resultMessage += `${item.name}: Oikein!\n`;
      } else {
        resultMessage += `${item.name}: Väärin. Oikea vastaus on ${item.symbol}.\n`;
        isCorrect = false;
      }
    });

    

    if (isCorrect) {
      
      alert("Kaikki vastaukset ovat oikein!\nPääset sivulle: Merkit alkuaineisiin2!");
      navigate("/randomAsking2");
    } else {
      alert(resultMessage);
    }
  };

  // Alustetaan kysymykset, kun komponentti latautuu
  React.useEffect(() => {
    shuffleQuestions();
  }, []);

  return (
    <div >
      <h1>Merkit alkuaineisiin</h1>
      <form onSubmit={handleSubmit}>
        {questions.map((item) => (
          <div  className="row">
          <label key={item.name} className="label">
            {item.name} {/* Näytetään aineen nimi kysymyksenä */}
            <input
              type="text"
              className="input"
              name={item.name} // Käyttäjän vastaus tallennetaan aineen nimellä
              value={answers[item.name] || ""}
              autoComplete="off"
              style={{ padding: "0", marginLeft: "10px" , width: "40px" , textAlign: "center"}}
              onChange={handleChange}
            />
            <br />
          </label>
          </div>
        ))}
        <br />
        <button type="submit">Lähetä</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default RandomAsking;
