import React from 'react'

const SucessoComponent = (errorMensage, setState) => {
    return (
        <div className='fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center'>
            <div className='bg-white rounded-lg p-4 text-green-500 flex items-center justify-center flex-col py-2'>
                <h1 className='mt-4'>Sucesso: {errorMensage} </h1>
                <button onClick={()=>setState(false)} className='px-3 py-1 bg-slate-800 rounded text-white mt-2 mb-4 hover:bg-slate-400 hover:text-black transition-all duration-300'>OK!</button>
            </div>
        </div>
    )
}

export default SucessoComponent