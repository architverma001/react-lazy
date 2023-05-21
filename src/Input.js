import React, { useState } from 'react'

function Input() {
    const [text,setText] = useState("")
  return (
    <div className='input'>
 <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <span className='file-handle'>
        <img src='/img/file.svg'/>
        <img src='/img/send.svg'/>
      </span>
    </div>
  )
}

export default Input
