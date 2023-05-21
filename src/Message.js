import React from 'react'

function Message(props) {
    const handleImageError = (event) => {
        event.target.src = '/img/profileimage.webp'; // Default image source
      };
  return (
    <div className= {`message-cls ${props.idz=== '73785ed67d034f6290b0334c6e756433' && "owner"}`}>
     
     <span className='my-profile'><img src= {props.prof} onError={handleImageError}/></span>
    <span className= {`my-text ${props.idz=== '73785ed67d034f6290b0334c6e756433' && "ownertxt"}`}>{props.mess}</span>
    </div>
  )
}
//my-text
export default Message
