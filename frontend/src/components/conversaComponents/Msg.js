import React from 'react'

const Msg = ({text, autor, name}) => {
  if(autor===name){
    return (
        <div>Eu: {text}</div>
      )
  } else {
      return (
          <div>{autor}: {text}</div>
      )
  }
  
}

export default Msg