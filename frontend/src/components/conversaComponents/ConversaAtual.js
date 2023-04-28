import React, { useEffect, useState } from 'react'
import RenderConversa from './RenderConversa'
import { useAuthContext } from '../../contexts/AuthContext'

const ConversaAtual = ({mensagens, state, msg, setMsg, enviarMensagem}) => {
  const mensagensFiltradas = mensagens.filter(mensagem=> mensagem.protocolo === state)
  
  return (
    <div className='flex flex-col h-full'>
      <RenderConversa mensagens={mensagensFiltradas}/>
      <div className='h-[7%] min-w-min'>
        <input type="text" name="texto" value={msg} id="" className='border-black border justify-self-end py-2 px-2 w-[92%] min-w-min ml-[1%]' onChange={(e)=>setMsg(e.target.value)}/>
        <button className='w-[5%] min-w-min mx-[1%] bg-green-500 text-black py-4 px-2 rounded-2xl' onClick={enviarMensagem}>Enviar</button>
      </div>
    </div>
    
  )
}

export default ConversaAtual