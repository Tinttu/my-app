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
      if (answers[item.symbol]?.toLowerCase() === item.name.toLowerCase()) {
        resultMessage += `${item.symbol}: Oikein!\n`;
      } else {
        resultMessage += `${item.symbol}: Väärin. Oikea vastaus on ${item.name}.\n`;
        isCorrect = false;
      }
    });

    if (isCorrect) {
      setMessage("Kaikki vastaukset ovat oikein!");
    } else {
      setMessage(resultMessage);
    }
  };

  // Alustetaan kysymykset, kun komponentti latautuu
  React.useEffect(() => {
    shuffleQuestions();
  }, []);

  return (
    <div>
      <h1>Kemiallisten aineiden kysely</h1>
      <form onSubmit={handleSubmit}>
        {questions.map((item) => (
          <label key={item.symbol}>
            {item.name} {/* Näytetään aineen nimi */}
            <input
              type="text"
              name={item.symbol}
              value={answers[item.symbol] || ""}
              autoComplete="off"
              style={{ marginLeft: "20px" }}
              onChange={handleChange}
            />
            <br />
          </label>
        ))}
        <button type="submit">Lähetä</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default RandomAsking;
