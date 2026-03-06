import React from 'react'

function Button({btnClicked}) {
  
  const btns = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', 'C', '+',
    '=' 
  ];

  return (
    <div className='grid grid-cols-4 gap-2'>
        {btns.map((btn) => {
            const isOperator = ['/','*','-','+','='].includes(btn);
            const isClear = btn === 'C';
            const isEquals = btn === '=';

            return (
                <button 
                    key={btn} 
                    type='button'
                    className={`
                        ${isEquals ? 'col-span-4 aspect-auto h-12' : 'aspect-square'} 
                        ${isOperator ? 'bg-orange-500 hover:bg-orange-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}
                        ${isClear ? 'bg-red-500 text-white hover:bg-red-600' : ''}
                        fle items-center justify-center rounded-xl font-bold text-xl transition-all active:scale-95 shadow-sm
                    `}
                        onClick={()=>btnClicked(btn)} // pass which btn is pressed
                >
                    {btn}
                    
                </button>
            )
        })}
    </div>
  )
}

export default Button