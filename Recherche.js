import React, { useState } from 'react'

function Recherche() {
    const [value, setValue]=useState('');

  return (
    <div>
        <input type="text" onChange={((e)=>setValue(e.target.value))} placeholder='search' />

    
    </div>
  )
}

export default Recherche