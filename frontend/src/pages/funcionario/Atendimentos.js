import React, { useEffect, useState } from 'react'
import api from '../../api/api'
import UnitAtender from '../../components/atendimentoComponents/UnitAtender'
import { useAuthContext } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

const Atendimentos = () => {
  const {tipoUser, authentication, VerificarAntigoLogin, name, tokenLocal } = useAuthContext()
  const navigate = useNavigate()

  const [loading, setLoading] = useState(true)
  const [atendimentos, setAtendimentos] = useState({})
  function buscarAtendimentos() {
    api.get('/funcionario/conversa').then(res=>{
      setAtendimentos(res.data.conversasSemFunc)
    })
    console.log(atendimentos)
  }
  function sim() {
    console.log(atendimentos)
  }
  useEffect(() => {
    buscarAtendimentos()
    if (!authentication) {
      navigate("/login")
    }
    setLoading(false)
  },[loading])
  
  return (
    <div className='pt-14 flex flex-col items-center justify-center h-screen'>
      {
      Array.isArray(atendimentos) ? atendimentos.map((atend, index)=>(
        <UnitAtender key={index} conversa={atend} />
      )) : "Nenhum atendimento encontrado"
    }
    </div>
  )
}

export default Atendimentos