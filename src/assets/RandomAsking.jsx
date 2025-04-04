import React, { useState } from 'react';

function RandomAsking() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [message, setMessage] = useState("");

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
      if (answers[item.name]?.toLowerCase() === item.symbol.toLowerCase()) {
        // Vertaillaan käyttäjän vastausta (symbol) oikeaan symboliin
        resultMessage += `${item.name}: Oikein!\n`;
      } else {
        resultMessage += `${item.name}: Väärin. Oikea vastaus on ${item.symbol}.\n`;
        isCorrect = false;
      }
    });

    if (isCorrect) {
      alert("Kaikki vastaukset ovat oikein!");
    } else {
      alert(resultMessage);
    }
  };

  // Alustetaan kysymykset, kun komponentti latautuu
  React.useEffect(() => {
    shuffleQuestions();
  }, []);

  return (
    <div>
      <h1>Symbolit alkuaineisiin</h1>
      <form onSubmit={handleSubmit}>
        {questions.map((item) => (
          <label key={item.name}>
            {item.name} {/* Näytetään aineen nimi kysymyksenä */}
            <input
              type="text"
              
              name={item.name} // Käyttäjän vastaus tallennetaan aineen nimellä
              value={answers[item.name] || ""}
              autoComplete="off"
              style={{ padding: "0", marginLeft: "10px" , width: "40px" , textAlign: "center"}}
              onChange={handleChange}
            />
            <br />
          </label>
        ))}
        <br />
        <button type="submit">Lähetä</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default RandomAsking;
