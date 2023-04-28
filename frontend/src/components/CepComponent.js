import React from 'react'
import ErrorComponent from './mensagensComponents/ErrorComponent'
import { cepErrado } from './ErrorCode'

const CepComponent = ( {setState, state, buscarCep, errorCode}) => {
  return (
    <div className='flex items-center justify-center flex-col pb-2'>
        <div className='pb-1 flex flex-col justify-center items-center'>
          <label htmlFor="cep" className=''>Seu CEP:</label>
          {errorCode===cepErrado?<ErrorComponent error={"Cep Errado"}/>:""}
        </div>
        
        <div>
          <input type="text" value={state} onChange={(e) => setState(e.target.value)} name="cep" id="cep" className='w-[270px] px-2 rounded'/>
          <button className='ml-1 px-2 bg-white rounded-full hover:bg-slate-500 transition-all duration-300' onClick={buscarCep}>?</button>
        </div>
    </div>
  )
}

export default CepComponent