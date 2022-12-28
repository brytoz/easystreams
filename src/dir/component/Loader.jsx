import React from 'react'
import * as logo from './Img'


function Loader() {
  return (
    <div style={{zIndex:100}}
     className="w-full h-screen flex z-99 fixed top-0 left-0 bg-white overflow-y-hidden ">
      <div className="w-full flex justify-center items-center">
        <img
          src={logo.Six} 
          className="animate-pulse w-20"
          alt="EasyStreams App"
          title="EasyStreams App"
        />
        
      </div>
    </div>
  )
}

export default Loader
