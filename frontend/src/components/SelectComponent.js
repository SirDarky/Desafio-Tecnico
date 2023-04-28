import React from 'react'

const SelectComponent = ({setState}) => {
  return (
    <div className='flex flex-col items-center'>
        <label htmlFor="tipoUser" className='pb-2'>Selecione o tipo de pessoa:</label>
        <select name="tipoUser" id="tipoUser" className='rounded mb-2 px-1 w-32' onChange={(event) => setState(event.target.value)}>
          <option value="Funcionario">Funcionario</option>
          <option value="Cliente">Cliente</option>
        </select>
    </div>
  )
}

export default SelectComponent