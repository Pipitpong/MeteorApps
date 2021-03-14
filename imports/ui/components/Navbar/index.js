import React from 'react'
// import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as BiIcons from 'react-icons/bi'

import './Navbar.css'

export function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-left'>
        <img src='/img/logo.png' width='120' />
        <li>Long Term Care</li>
      </div>

      <div className='nav-right'>
        <div className='register'>
          <FaIcons.FaUserAlt />
          <li>ลงทะเบียน</li>
          <AiIcons.AiFillCaretDown size={12} />
        </div>
        <div className='login'>
          <BiIcons.BiLogIn size={20} />
          <li>เข้าสู่ระบบ</li>
        </div>
      </div>
    </nav>
  )
}
