import React from 'react'
import api from '../../api/api'

const NovaConversa = ({setAtualConversa, setCriaConversa}) => {
    function criarNovaConversa() {
        api.post("/cliente/conversa").then(
            res =>{
              const protocolo = res.data.numero_protocolo
              setCriaConversa(false)
              setAtualConversa(protocolo)
            }
          ).catch(err=>{
            if(err.response.status ===400){
              
            }
          })
    }
  return (
    <div className='flex flex-col justify-center items-center h-full'>
        <h1>Você deseja criar uma nova conversa?</h1>
        <button className='mt-5 py-2 px-4 rounded bg-red-600 hover:bg-red-900 hover:text-white' onClick={criarNovaConversa}>Sim!</button>
    </div>
  )
}

export default NovaConversa