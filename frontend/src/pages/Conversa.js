import React, { useEffect, useState } from 'react'
import { useAuthContext } from '../contexts/AuthContext'
import api, { link_api } from '../api/api';
import { useNavigate } from 'react-router-dom';
import LoadingComponent from '../components/mensagensComponents/LoadingComponent';
import ListaConversa from '../components/conversaComponents/ListaConversa';
import NovaConversa from '../components/conversaComponents/NovaConversa';
import ConversaAtual from '../components/conversaComponents/ConversaAtual';
import NovaConversaButton from '../components/conversaComponents/NovaConversaButton';
import io from 'socket.io-client';

const Conversa = () => {
    
    const {tipoUser, authentication, VerificarAntigoLogin, name, tokenLocal } = useAuthContext()
    const socket = io("ws://localhost:3050");

    
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true);
    const [atualConversa, setAtualConversa] = useState("")
    const [criaConversa, setCriaConversa] = useState(true)

    const [conversas, setConversas] = useState([])
    const [mensagens, setMensagens] = useState([]) 

    const [mensagem, setMensagem] = useState("")

    useEffect(() => {
        VerificarAntigoLogin()
        buscarConversas()
        setLoading(false) 
    },[tokenLocal])  

    useEffect(() => {
        if (!authentication) {
          navigate("/login")
        }
        if(tipoUser==="Funcionario"){
            setCriaConversa(false)
        }
        setLoading(false)
      }, [loading])
      

    socket.on('connect', () => {
        Object.values(conversas).forEach((conv, index) => {
            socket.emit('join-room', conv.protocolo);
        });
    });

    function enviarMensagem() {
        const token = tokenLocal;
        const autor = name;
        const texto = mensagem;
        const protocolo = atualConversa;
        const novaMensagem = { autor: autor, texto: texto, token: token, protocolo: protocolo}


        socket.emit('enviar-mensagem', novaMensagem)
        setMensagem("")
    }

    socket.on('mensagem-recebida', (novaMensagem)=>{
        buscarConversas()
    })

    function organizarConversas(conv, msg) {
        setConversas(conv);
        setMensagens(msg)
        
    }
    function buscarConversas(){
        api.get("/cliente/conversa").then(
            res=>{
                //console.log(res.data)
                organizarConversas(res.data.conversas, res.data.mensagens)
            }
        ).catch(
            err=>{
                console.log(err)
        })
    }

    
  return (
    <div className='flex items-center justify-center w-full h-screen bg-black'>
        {loading? <LoadingComponent/> : ""}
        <div className='w-1/6 bg-gray-500 h-full max-h-full pt-14 overflow-y-auto overflow-visible'>
            {tipoUser==="Funcionario"?"":<NovaConversaButton setState={setCriaConversa} state={criaConversa} setConversa={setAtualConversa}/>}
            {
                conversas!=null? Object.values(conversas).map((conv, index) => (
                    <ListaConversa
                        key={index}
                        conversa={conv}
                        setState={setAtualConversa}
                        state={atualConversa}
                        setConversa={setCriaConversa}
                    />
                )):
                ""
            }
        </div>
        <div className='w-5/6 bg-stone-50 h-full max-h-full pt-16'>
            {criaConversa && atualConversa==0? <NovaConversa setCriaConversa={setCriaConversa} setAtualConversa={setAtualConversa}/>: <ConversaAtual state={atualConversa} mensagens={mensagens} msg={mensagem} setMsg={setMensagem} enviarMensagem={enviarMensagem} />}
        </div>
    </div>
  )
}

export default Conversa