import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../contexts/AuthContext'


const NavBar = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true);

  const {name, authentication, Deslogar, VerificarAntigoLogin} = useAuthContext()

  const logoutText = authentication?"Deslogar": "";

  const Logout = ()=>{
    Deslogar();
    navigate("/login")
  }

  useEffect(() => {
    setLoading(false)
    VerificarAntigoLogin()
  },[loading])
  
  
  return (
    <nav className='flex px-14 w-screen text-white justify-between items-center h-14 bg-slate-900 absolute'>
        <div className='justify-center items-center text-2xl'>
            <Link to={"/"}>
              <h1>ChatClient</h1>
            </Link>
        </div>
        {
          authentication? 
            <button onClick={Logout}>{logoutText}</button>
            :  
            <div className='flex flex-row '>
              <Link to={"/login"}>
                <h3 className='px-5 min-h-full'>Login</h3>
              </Link>
              <Link to={"/register"}>
                <h3>Registro</h3>
              </Link>
            </div>
        }
        
    </nav>
  )
}

export default NavBar