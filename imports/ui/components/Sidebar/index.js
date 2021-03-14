import React from 'react'

import './Sidebar.css'

import { SidebarData } from '../SidebarData'
import { NavLink } from 'react-router-dom'
export function Sidebar() {
  return (
    <div className='sidebar'>
      <ul className='sidebarList'>
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              activeClassName='active'
              className='row'
              id={window.location.pathname == val.link ? 'active' : ''}
              onClick={() => {
                window.location.pathname = val.link
              }}
            >
              <div id='icon'>{val.icon}</div>
              <div id='title'>{val.title}</div>
            </li>
            // <NavLink
            //   key={key}
            //   activeClassName='active'
            //   className='row'
            //   to={val.link}
            // >
            //   <div id='icon'>{val.icon}</div>
            //   <div id='title'>{val.title}</div>
            // </NavLink>
          )
        })}
      </ul>
    </div>
  )
}
