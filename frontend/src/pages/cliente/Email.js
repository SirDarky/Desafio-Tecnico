import React, { useState } from 'react'
import InputText from '../../components/InputText'
import api from '../../api/api'
import SucessoComponent from '../../components/mensagensComponents/SucessoComponent'

const Email = () => {
  const [toEmail, setToEmail] = useState("")
  const [tittle, setTittle] = useState("")
  const [text, setText] = useState("")
  const [sucesso, setSucesso] = useState(false)

  function enviar(event) {
    event.preventDefault()
    const object = { toEmail: toEmail,tittle: tittle,text: text}
    api.post('/cliente/email', object).then(()=>{
      setSucesso(true)
    })
  }
  return (
    <div className='flex items-center justify-center pt-14'>
      {
        sucesso? <SucessoComponent setState={setSucesso} errorMensage={"Email enviado"}/>: ""
      }
      <form onSubmit={enviar} className='flex flex-col bg-white rounded w-96 items-center justify-center h-80 mt-28'>
        <InputText texto={"email"} artigo={"o"} setState={setToEmail} state={toEmail}/>
        <InputText texto={"titulo"} artigo={"o"} setState={setTittle} state={tittle}/>
        <InputText texto={"texto"} artigo={"o"} setState={setText} state={text}/>
        <button type="submit" className='bg-black text-white w-20'>Enviar</button>
      </form>
    </div>
  )
}

export default Email