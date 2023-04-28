import React, { useState } from 'react'
import { Link, useNavigate  } from 'react-router-dom'

const HomeFuncionario = () => {
  const navigate = useNavigate()
  function redirect(link) {
    switch (link) {
      case 1:
        navigate("/conversa")
        break;
      case 2:
        navigate("/atendimentos")
        break;
        break;
      default:
        break;
    }
  }
  return (
    <div className='h-full flex flex-row items-center justify-center'>
      <button className='py-10 px-10 mr-5 bg-white rounded-full text-black hover:bg-indigo-800 hover:text-white transition-all duration-300' onClick={()=>redirect(1)}>Conversas</button>
      <button className='py-10 px-10 mx-5 bg-white rounded-full text-black hover:bg-cyan-950 hover:text-white transition-all duration-300' onClick={()=>redirect(2)}>Atendimentos</button>
    </div>
  )
}

export default HomeFuncionario