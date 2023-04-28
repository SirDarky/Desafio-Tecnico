import React, { useEffect, useState } from 'react'
import LoadingComponent from '../components/mensagensComponents/LoadingComponent'
import { useAuthContext } from '../contexts/AuthContext'
import HomeCliente from './home/HomeCliente'
import HomeFuncionario from './home/HomeFuncionario'
import { useNavigate } from 'react-router-dom'

const Home = () => {  
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const {tipoUser, authentication } = useAuthContext()
  useEffect(() => {
    if (!authentication) {
      navigate("/login")
    }
    setLoading(false)
  }, [loading])
  
  return (
    <div className='flex items-center justify-center w-full h-full pt-56'>
      {loading? <LoadingComponent/> : ""}
      {tipoUser=="Cliente"?<HomeCliente/>: <HomeFuncionario/>}
    </div>
  )
}

export default Home