import React from 'react'
import "./fetchData.css"
import fetch from "../../src/assets/images/fetch.jpg"
import fetchResult from "../../src/assets/images/fetchResult.jpg"
import congrats from "../../src/assets/images/congrats.jpg"
const FetchDataComponent = () => {
  return (
    <div className='fetchdata'>
      <h1>Try it</h1>
      <p>Run this code here, in a console or from any site:</p>
      <div className="fetch">
      <img className='img1' src={fetch} alt="" />
      <div className="button">
        <button className='btn'>Run script</button>
      </div>
      <img className='img2' src={fetchResult} alt="" />
      <div className="img3">
      <img className='img3' src={congrats} alt="" />
      </div>
      </div>
    </div>
  )
}

export default FetchDataComponent
