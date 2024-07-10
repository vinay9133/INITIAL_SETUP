import React from 'react'
import './Console.css'
import { RiArrowGoBackFill } from "react-icons/ri";
function Console() {
  return (
    <div className='console'>
        <div className='navbar'>
            <h2>AQUAAIRX</h2>
        </div>
        <div className='cb'>
            <div className='sidebar'>
                <h4>Site Setting</h4>
                <ul>
                <button><li>General</li></button>
                <button><li>Comm Links</li></button>
                <button><li>Offline maps</li></button>
                <button><li>Mav Link</li></button>
                <button><li>Console</li></button>
                </ul>
            </div>
            <div className='console-body'>
                <h3>Console</h3>
            </div>
        </div>
    </div>
        
  )
}

export default Console