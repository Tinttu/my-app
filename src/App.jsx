import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Tuodaan Router-komponentit
import './App.css';
import Asking from './assets/Asking';
import Asking2 from './assets/Asking2';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Perusreitti, joka näyttää Asking-komponentin */}
          <Route path="/" element={<Asking />} />

          {/* Reitti Asking2-komponentille */}
          <Route path="/asking2" element={<Asking2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
