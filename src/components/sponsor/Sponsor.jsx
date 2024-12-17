import React from 'react';
import "./sponsor.css"
import mockendLogo from "../../assets/images/mockend.svg" 
import pic1 from '../../assets/images/pic1.png'; 

const Sponsor = () => {
  return (
    <div className='sponsor'>
      <h1>Sponsors</h1>
      <p>JSONPlaceholder is supported by the following companies and Sponsors on GitHub, check them out 💖</p>
      <img src={mockendLogo} alt="Sponsor 2" />
      <img src={pic1} alt="Sponsor 2" />
      <a href="https://github.com/sponsors/typicode">Your company logo here</a>
    </div>
  );
}

export default Sponsor;



