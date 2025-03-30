import { useState } from 'react'
import './App.css'
import Asking from "./assets/Asking"
//import Random-asking from "./assets/Random-asking"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div>
        
        <Asking /> {/* Käytä Asking-komponenttia tässä */}
      </div>
    </>
  )
}

export default App
