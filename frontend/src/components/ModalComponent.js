import React from 'react'

const ModalComponent = ({setState, user}) => {
    const keys = Object.keys(user);
    const handleCloseModal = () => {
        setState(false);
    }
    return (
        <div className='fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center'>
            <div className='bg-white rounded-lg p-4'>
                <h1>OLÁ</h1>
                {keys.map((key) => (
                    <h1 key={key}>{`${key}: ${user[key]}`}</h1>
                ))}
                <button onClick={handleCloseModal}>FECHAR</button>
            </div>
        </div>
    )
}
export default ModalComponent