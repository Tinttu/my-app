import React, { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function RandomAsking3() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Alustetaan navigointifunktio
  
  // Tietokanta kemiallisista merkeistä ja aineista
  const symbolsData = [
    { symbol: "Ca", name: "kalsium" },
    { symbol: "Br", name: "bromi" },
    { symbol: "Pb", name: "lyijy" },
    { symbol: "Ge", name: "germanium" },
    { symbol: "Hg", name: "elohopea" },
    { symbol: "F", name: "fluori" },
    { symbol: "P", name: "fosfori" },
    { symbol: "S", name: "rikki" },
    { symbol: "Si", name: "pii" },
    { symbol: "Na", name: "natrium" }
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
      alert("Kaikki vastaukset ovat oikein!\nPääset kertaamaan vaikeimpia alkuaineita.");
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
      <h1>Merkit alkuaineisiin 3</h1>
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

export default RandomAsking3;
