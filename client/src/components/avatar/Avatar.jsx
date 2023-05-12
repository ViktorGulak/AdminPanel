import React from 'react'
import "./avatar.scss"
import profileImg from "../../assets/Profile-PNG.png";
import { Link } from 'react-router-dom'

export default function Avatar() {
  return (
    <div className="popover popover-bottom avatar-wrapper">
        <figure className="avatar avatar-lg" height={100} width={100}>
          <img src={profileImg} alt="Профиль" />
        </figure>  
        <div className="popover-container">
            <div className="card">
                <div className="card-body">
                    <span>Горячая линия: +7 (495) 514 02 11</span>
                </div>
                <div className="card-body">
                    <span>IT отдел 70-52-90</span>
                </div>
                <div className="card-body">
                    <Link to="/adminpanel">
                        <i className="icon icon-cross"></i>
                        <span className="exit-link">Выход</span>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
