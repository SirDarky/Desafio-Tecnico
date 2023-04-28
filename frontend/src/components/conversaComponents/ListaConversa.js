import React from 'react'
import Notificacao from './Notificacao';

const ListaConversa = ({conversa, mensagemVizualizada, setState, state, setConversa}) => {
    const classe = `py-3 px-2 ${state==conversa.protocolo? "bg-gray-400": "bg-gray-200"} hover:bg-gray-400 hover:cursor-pointer flex justify-between` 
    function initialConversa() {
        setConversa(false);
        setState(conversa.protocolo);
    }
    return (
        <div className={classe} onClick={()=>initialConversa()}>
            <h1>Protocolo: {conversa.protocolo}</h1>
            {mensagemVizualizada?<Notificacao />:""}
        </div>
    )

}

export default ListaConversa