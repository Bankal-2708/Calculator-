import React, { useState } from 'react'
import Input from './Components/Input'
import Button from './Components/Button'

function App() {

  const [input, setInput] = useState("");

  const btnClicked = (btnText) => {
    if (btnText === 'C') { // make display bar empty
      setInput("");
    }
    else if (btnText === '=') {
      const result = eval(input); // solving 
      setInput(result);
    } else {
      const displayValue = input + btnText; // for taking input 
      setInput(displayValue);
    }
  }


return (
  <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-100 via-gray-100 to-blue-200">

    <div className="bg-white w-80 p-6 rounded-3xl shadow-2xl border border-gray-200 flex flex-col gap-5">

      <h1 className="text-xl font-semibold text-center text-gray-700">
        Calculator
      </h1>

      <Input input={input} />
      <Button btnClicked={btnClicked} />   {/* method pass to btn component */}

    </div>

  </div>
)
}

export default App