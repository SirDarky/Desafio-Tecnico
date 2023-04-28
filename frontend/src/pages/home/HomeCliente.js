import React, { useState } from 'react'
import { Link, useNavigate  } from 'react-router-dom'

const HomeCliente = () => {
  const navigate = useNavigate()
  function redirect(link) {
    switch (link) {
      case 1:
        navigate("/conversa")
        break;
      case 2:
        navigate("/email")
        break;
      case 3:
        window.location.href = "https://wa.me/5592986063355"
        break;
      default:
        break;
    }
  }
  return (
    <div className='h-full flex flex-row items-center justify-center'>
      <button className='py-10 px-10 mr-5 bg-white rounded-full text-black hover:bg-indigo-800 hover:text-white transition-all duration-300' onClick={()=>redirect(1)}>Conversas</button>
      <button className='py-10 px-10 mx-5 bg-white rounded-full text-black hover:bg-cyan-950 hover:text-white transition-all duration-300' onClick={()=>redirect(2)}>Envie-nos um e-mail</button>
      <button className='py-10 px-10 ml-5 bg-white rounded-full text-black hover:bg-green-900 hover:text-white transition-all duration-300' onClick={()=>redirect(3)}>Envie-nos uma mensagem no whatsapp</button>
    </div>
  )
}

export default HomeCliente