import React from 'react'
import {useNavigate} from 'react-router-dom';
import "./authorizationForm.scss"

export default function AuthorizationForm() {
    const navigate = useNavigate();

    const enterBtnClickHandler = (e) =>{
        e.preventDefault();
        navigate("/adminpanel/profile/1")
    }
  return (
    <div className="authorization-content-form">
        <div className="authorization-title">
            <span>Авторизация в панели администратора</span>
        </div>
        <form>
            <div className="form-group authorization-content-group">
                
                <label className="form-label custom-label" htmlFor="input-login">Логин</label>
                <input className="form-input custom-input" type="text" id="input-login" placeholder="Ваш логин"/>
                <label className="form-label custom-label" htmlFor="input-password">Пароль</label>
                <input className="form-input custom-input" type="password" id="input-password" placeholder="Ваш пароль"/>
                <button className="btn btn-primary enter-btn"
                    onClick={(e) => enterBtnClickHandler(e)}
                >Войти</button>
            </div>
        </form>
    </div>
  )
}
