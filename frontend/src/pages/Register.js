import React from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import api from '../api/api';
import InputText from '../components/InputText';
import CepComponent from '../components/CepComponent';
import SelectComponent from '../components/SelectComponent';
import ModalComponent from '../components/ModalComponent';
import LoadingComponent from '../components/mensagensComponents/LoadingComponent';
import { cepErrado, emailExist, noError } from '../components/ErrorCode';

const Register = () => {
  //Loading
  const [loading, setLoading] = useState(false)
  //Atributos
  const [cep, setCep] = useState("");
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [numero, setNumero] = useState("");
  const [tipoUser, setTipoUser] = useState("Funcionario");

  //Navigate
  const navigate = useNavigate()

  //erros
  const [errorCode, setErrorCode] = useState();

  function buscarCep() {
    setLoading(true);
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => {
        setBairro(response.data.bairro);
        setLogradouro(response.data.logradouro);
        setCidade(response.data.localidade);
        setLoading(false)
      })
      .catch(error => {
        if (error.code==="ERR_NETWORK") {
          setErrorCode(cepErrado);
          setTimeout(() => {
            setErrorCode(noError);
          }, 5000);
        }
        setLoading(false)
      });
  }

  function userObject() {
    return {
      nome: nome,
      email: email,
      senha: senha,
      logradouro: logradouro,
      bairro: bairro,
      numero: numero,
      cidade: cidade,
      tipoUser: tipoUser
    }
  }

  function registrar(event) {
    event.preventDefault();
    setLoading(true);
    const userData = userObject();
    api.post("/register", userData).then(
      res => {
        setLoading(false);
        navigate('/login');
      }
    ).catch(error => {
      if(error.response.data.code===11000){
        setErrorCode(emailExist);
        setTimeout(() => {
          setErrorCode(noError);
        }, 5000);
      } else {
        console.log(error);
      }
      setLoading(false);
    });
  }

  return (
    <div className='flex items-center justify-center w-full pt-20'>
      {loading? <LoadingComponent/> : ""}
      <div className='text-black flex flex-col bg-slate-400 w-[450px] h-[800px] justify-center items-center rounded-xl shadow-2xl border-black border-2'>
        <h1 className='text-2xl pb-5'>Registro</h1>
        <form onSubmit={registrar} className='flex justify-center items-center flex-col'>
          <InputText texto={"nome"} artigo={"o"} setState={setNome} state={nome}/>
          <InputText texto={"email"} artigo={"o"} setState={setEmail} state={email} errorCode={errorCode}/>
          <CepComponent setState={setCep} state={cep} buscarCep={buscarCep} errorCode={errorCode}/>
          <InputText texto={"logradouro"} artigo={"o"} setState={setLogradouro} state={logradouro} desabilidado={true}/>
          <InputText texto={"cidade"} artigo={"a"} setState={setCidade} state={cidade} desabilidado={true}/>
          <InputText texto={"bairro"} artigo={"o"} setState={setBairro} state={bairro} desabilidado={true}/>
          <InputText texto={"numero"} artigo={"o"} setState={setNumero} state={numero}/>
          <InputText texto={"senha"} artigo={"a"} setState={setSenha} state={senha}/>
          <SelectComponent setState={setTipoUser}/>
          <button type='submit' className='bg-white my-2 py-2 px-3 rounded-lg hover:bg-slate-500 transition-all duration-300'>Registrar</button>
        </form>
        <span>Já possui login?</span>
        <span className='text-sky-950'><Link to={"/login"}>Clique aqui</Link></span>
      </div>
    </div>
  )
}

export default Register
