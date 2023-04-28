import React from 'react'
import api from '../../api/api'
import { useNavigate  } from 'react-router-dom'


const UnitAtender = ({conversa}) => {
    const navigate = useNavigate()
    
    function atender() {
        const protocolo = conversa.protocolo
        api.get(`/funcionario/conversa/${protocolo}`).then(
            res=>{navigate('/conversa')}
        ).catch(err=>{
            console.log(err)
        })
    }
  return (
    <div className='bg-white h-32 w-80 flex justify-center items-center flex-col my-5 rounded-lg border border-black'>
        <h1>Protocolo de atendimento: {conversa.protocolo}</h1>
        <button className='bg-red-600 text-black mt-2 py-2 px-2 rounded-xl' onClick={atender}>Atender</button>
    </div>
  )
}

export default UnitAtender