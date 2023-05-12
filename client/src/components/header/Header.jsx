import React from 'react'
import logo from "../../assets/logo.png"
import Avatar from "../avatar/Avatar"
import { useSelector, useDispatch } from 'react-redux'
import { setFocus } from '../../redux/slices/sideBarBtnSlice'
import "./header.scss"

export default function Header({showSideBarBtn}) {

  const isFocus = useSelector((state) => state.sideBarBtn.isFocus); // глобальное состояние кнопки сайдбара
  const dispatch = useDispatch(); // передаст экшен в редюсер
  return (
    <header className="navbar header">
      <section className="navbar-section">
        <img src={logo} alt="Logo" />
        { showSideBarBtn ?
          <button className="btn btn-lg menu-btn btn-link text-primary"
          onClick={() => dispatch(setFocus())}>{/* передаём экшен в dispatch*/}
          <i className={isFocus ? "icon icon-cross" : "icon icon-menu"}></i>
        </button> : ""
        } 
      </section>
      <section className="navbar-section mx-2">
        { showSideBarBtn && <Avatar/>}
      </section>           
</header>
 )
}
