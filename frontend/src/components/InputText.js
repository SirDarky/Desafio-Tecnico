import React from 'react'
import ErrorComponent from './mensagensComponents/ErrorComponent';
import { emailExist, emailSenhaErrado } from './ErrorCode';

const InputText = ({texto, setState, state, artigo, desabilidado, errorCode}) => {
    const titulo = !desabilidado? `Digite ${artigo} ${texto} :` : `${texto.charAt(0).toUpperCase()}${texto.slice(1)} :`;
    let errorComponent;
    switch(errorCode){
        case emailExist:
            errorComponent = <ErrorComponent error={"Email já existe"} />;
            break;
        default:
            errorComponent = null;
            break;
    }
    return (
    <div className='flex flex-col mb-2 justify-center items-center'>
        <div className='pb-1 flex flex-col justify-center items-center'>
            <label htmlFor={texto}>
                {titulo}
            </label>
            {errorComponent}
        </div>
        <input required type={texto==="senha"? "password":"text"}  value={state} name={texto} className='w-[300px] px-2 rounded border border-black' onChange={(e) => setState(e.target.value)} disabled={!desabilidado ? false : true}/>
    </div>
  )
}

export default InputText