import React from 'react'

const ErrorComponent = ({error}) => {
  return (
    <span className='text-red-600 py-0'>{error}</span>
  )
}

export default ErrorComponent