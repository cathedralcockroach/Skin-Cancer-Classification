import React from 'react'
import './result.css';
import mask from "../assets/mask.png"

const Result = () => {
  return (
    <div className='result'>
      <h1>Result</h1>
      <div className="output">
        <h2>Type of cancer detected</h2>
        <p>-------</p>
        <h2>Area Infected</h2>
        <p>-------</p>
        <h2>Generated Mask</h2>
        <img src={mask} alt="" className='mask'/>
      </div>
    </div>
  )
}

export default Result