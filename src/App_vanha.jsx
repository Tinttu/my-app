import { useState } from 'react'
import './App.css'
import Asking2 from "./assets/Asking2"
import Asking from "./assets/Asking"
//import Random-asking from "./assets/Random-asking"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div>
        <Asking /> 
        {/*<Asking2 /> {/* Käytä Asking-komponenttia tässä */}
      </div>
    </>
  )
}

export default App