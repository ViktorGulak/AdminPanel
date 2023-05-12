import React from 'react'
import { NavLink } from 'react-router-dom'
import { sideBarData } from './sidebarData'
import { useSelector } from 'react-redux'
import "./sideBar.scss"

export default function SideBar() {
  const isFocus = useSelector((state) => state.sideBarBtn.isFocus);
  
  return (
    <div className={ isFocus ? "sidebar" : "sidebar disabled"}>
      <div className="divider top-divider" data-content="Меню"></div>
      <ul className="nav-menu-items">
        {
          sideBarData.map((item) => {
          
            return (
              <li key={item.title} className={item.className}>
                <NavLink to={item.path}
                  className={({isActive}) => isActive ? "active-sidebar-link" : ""}
                >
                  <i className={item.icon}></i>
                  <span>{item.title}</span>
                </NavLink>
              </li>
            );
          })
        }
      </ul>
    </div>
  )
}
