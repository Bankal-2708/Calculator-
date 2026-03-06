import React from 'react'

function Input({input}) {
  return (
    <div className="w-full">

      <input 
        type="text"
        placeholder="0"
        value={input} // show btn click on input display 
        readOnly // took input from btns clicked not from keybord
        className="w-full text-right text-4xl font-mono bg-gray-100 rounded-xl px-4 py-4 text-gray-800 shadow-inner focus:outline-none"
      />

    </div>
  )
}

export default Input