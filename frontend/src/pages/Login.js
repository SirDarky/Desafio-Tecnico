import React, {useState, useEffect} from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import InputText from '../components/InputText'
import LoadingComponent from '../components/mensagensComponents/LoadingComponent'
import api from '../api/api'
import { useAuthContext } from '../contexts/AuthContext'
import ErrorMensageComponent from '../components/mensagensComponents/ErrorMensageComponent'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(true);
  const [userErro, setUserErro] = useState(false);
  function userObject() {
    return {
      email: email,
      senha: senha,
    }
  }

  const { RealizarNewLoginCliente, VerificarAntigoLogin, authentication } = useAuthContext()

  function login(event) {
    event.preventDefault()
    setLoading(true)
    const userData = userObject();
    api.post("/entrar", userData).then(
      res =>{
        RealizarNewLoginCliente(res.data)
        setLoading(false)
        navigate('/');
      }
    ).catch(err=>{
      if(err.response.status ===400){
        setUserErro(true)
      }
    })
  }

  useEffect(() => {
    setLoading(false)
    if(authentication){
      navigate('/');
    }
  },[loading])
  
  return (
    <div className='flex items-center justify-center w-full h-full pt-56'>
      {loading? <LoadingComponent/> : ""}
      {userErro? <ErrorMensageComponent errorMensage={"Email ou Senha inválidos"} setState={setUserErro}/> :""}
      <div className='text-black flex flex-col bg-slate-400 w-96 h-96 justify-center items-center rounded-xl shadow-2xl border-black border-2'>
        <h1 className='text-2xl pb-10'>Login</h1>
        <form className='flex flex-col justify-center items-center' onSubmit={login}>
          <InputText texto={"email"} artigo={"o"} setState={setEmail} state={email}/>
          <InputText texto={"senha"} artigo={"a"} setState={setSenha} state={senha}/>
          <button type='submit' className='bg-white my-2 py-2 px-2 rounded-lg hover:bg-slate-500 transition-all duration-300'>Entrar</button>
          <span>Não possui conta?</span>
          <span className='text-sky-950'><Link to={"/register"}>Clique aqui</Link></span>
        </form>
      </div>
    </div>
  )
}

export default Login