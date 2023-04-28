import React from 'react'

const NovaConversaButton = ({setState, state, setConversa}) => {
    function conversa() {
        setState(true);
        setConversa(0);
    }
    return (
        <div>
            <button className='py-3 px-2 w-full bg-gray-200 hover:bg-gray-400' onClick={()=>conversa()}>Criar nova conversa</button>
        </div>
    )
}

export default NovaConversaButton