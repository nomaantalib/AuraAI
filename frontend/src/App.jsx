import React from 'react'
import { assets } from './assets/assets.js'

const App = () => {
  return (
 <div className="sidebar">
    <div className="top">
<img src={assets.menu_icon} alt="" />
<div className="new-chat">
    <img src={assets.plus_icon} alt="" />
    <p>New chat</p>

</div>
<div className="recent">
    <p className="recent-title">Recent</p>
    <div className="recent-entry">
        <img src={assets.message_icon} alt="" />
        <p>What is Reactjs ?.....</p>
        
    </div>
</div>
    </div>
 </div>
  )
}

export default App