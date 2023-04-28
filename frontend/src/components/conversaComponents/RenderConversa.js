import React from 'react'
import { useAuthContext } from '../../contexts/AuthContext'
import Msg from './Msg'

const RenderConversa = (mensagens) => {
  const { name } = useAuthContext();
  const msgs = Object.values(mensagens)[0]
  return (
    <div className='h-[93%] overflow-y-visible'>
        {
          msgs && msgs.map((msg, index) => (
            <Msg 
              key={index}
              text={msg.texto}
              autor={msg.autor.nome}
              name={name}
            />
          ))
        }

    </div>
  )
}

export default RenderConversa