import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Tuodaan Router-komponentit
import './App.css';
import Asking from './assets/Asking';
import Asking2 from './assets/Asking2';
import Asking3 from './assets/Asking3';
import RandomAsking from './assets/RandomAsking';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Perusreitti, joka näyttää Asking-komponentin */}
          <Route path="/" element={<Asking />} />

          {/* Reitti Asking2-komponentille */}
          <Route path="/asking2" element={<Asking2 />} />

          {/* Reitti Asking3-komponentille */}
          <Route path="/asking3" element={<Asking3 />} />

        {/* Reitti RandomAsking-komponentille */}
        <Route path="/randomAsking" element={<RandomAsking />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
