import React from 'react'
import { Link } from 'react-router-dom'
import './header.css';
export default function Header({cartItem}) {
 
  return (
       
    <header className='header'>
        <div>
            <h1>
                <Link to="/" className='logo'>
                    ELECTRONIC SHOP
                 
                </Link>
            </h1>
        </div>
        <div className='header-link'>
            <ul>
                <li>
                    <Link to="/">
                    Home
               
                    </Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/signup">
                    singup
                    </Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/card" className='card'>
                    <i class="fa fa-shopping-cart"></i>
                    <span className='length'>
                        {cartItem.length===0? "": cartItem.length}
                    </span> 
                    </Link>
              
                </li>
            </ul>
        </div>

    </header>
  )
}
