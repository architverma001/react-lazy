import React from 'react'

function Navbar() {
  return (
    <div>
      <div className='heading'>
      <div className='duo'>
        <span className='nav-img'><img src='/img/arrow.svg'/></span>
        <span className='nav-head'>Trip 1</span>
      </div>
      <div>
        <img src='/img/pen.svg'/>
      </div>
      </div>

      <div className='logo'>
      <div className='profile'>
        <span className='nav-img'><img src='/img/profile.svg'/></span>
        <div className='handle-intro'>
        <span className='nav-from'>From <span style={{fontWeight:'bolder'}}>IGI Airport,T3</span></span>
        <span className='nav-to'>To <span  style={{fontWeight:'bolder'}}>Sector 28</span></span>
        </div>
      </div>
      <div>
        <img src='/img/threedot.svg'/>
      </div>
      </div>

      <div className='underline'></div>
    </div>
  )
}

export default Navbar
