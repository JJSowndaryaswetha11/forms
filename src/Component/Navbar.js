import React from 'react'
import {Link, NavLink} from 'react-router-dom'

import { useState } from 'react'

export const Navbar = () => {
    const [menuOpen,setMenuOpen] = useState(false)
  return (
    <nav>
        <Link to='/' className='title'>GROCERY </Link>
        <div className='Menu' onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen ? 'open' : ''}>
        <li>
               <NavLink to='/'>Home</NavLink>
            </li>
            
            
            <li>
                <NavLink to='/login'>Login</NavLink>
            </li>
            <li>
                <NavLink to ='/register'>Register</NavLink>
            </li>
        </ul>
    </nav>
  )
}