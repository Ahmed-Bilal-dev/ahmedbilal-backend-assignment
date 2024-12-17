import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>

        <div className='logo'>
        <h2>AhmedBilal</h2>
        </div>

        <div className="links">
            <a href="https://jsonplaceholder.typicode.com/guide/">Guide</a>
            <a href="https://github.com/sponsors/typicode">Sponsor this project</a>
            <a href="https://blog.typicode.com/">Blog</a>
            <a href="https://my-json-server.typicode.com/">My JSON Server</a>
        </div>
      
    </div>
  )
}

export default Header
