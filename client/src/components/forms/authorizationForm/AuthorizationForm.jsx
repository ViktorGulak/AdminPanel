import React, {useState} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import "./authorizationForm.scss"

export default function AuthorizationForm() {
    const navigate = useNavigate();
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const enterBtnClickHandler = (e) =>{
        e.preventDefault();
        axios.post("/adminpanel/auth", {
            login,
            password
        }).then(({data}) =>{
            if(data.token){
                console.log(data.token)
                //navigate(`/adminpanel/profile/${data[0].userId}`);
            }
        }).catch(err => console.log(err));
        
    }
  return (
    <div className="authorization-content-form">
        <div className="authorization-title">
            <span>Авторизация в панели администратора</span>
        </div>
        <form>
            <div className="form-group authorization-content-group">
                
                <label className="form-label custom-label" htmlFor="input-login">Логин</label>
                <input className="form-input custom-input" type="text"
                    value={login} id="input-login" placeholder="Ваш логин"
                    onChange={(e) => setLogin(e.target.value)}
                 />
                <label className="form-label custom-label" htmlFor="input-password">Пароль</label>
                <input className="form-input custom-input" type="password" autoComplete='on'
                    value={password} id="input-password" placeholder="Ваш пароль"
                    onChange={(e) => setPassword(e.target.value)}
                 />
                <button className="btn btn-primary enter-btn"
                    onClick={(e) => enterBtnClickHandler(e)}
                >Войти</button>
            </div>
        </form>
    </div>
  )
}
