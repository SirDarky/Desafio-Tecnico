import React from 'react'

const LoadingComponent = () => {
  return (
    <div className='fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center'>
        <div className='bg-white rounded-lg p-4'>
            <h1>CARREGANDO...</h1>
        </div>
    </div>
  )
}

export default LoadingComponent