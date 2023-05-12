import React, {useState} from 'react'
import "./clientContentForm.scss"

export default function ClientContentForm () {
    const [selectedValue, setSelectedValue] = useState("Выберите из списка");

    return (
        <div className="client-content-form">
            <div className="client-content-title">
                <span>Оплата услуг</span>
            </div>
            <form>
                <div className="form-group client-content-group">
                    <div className="select-group">
                    <label className="form-label" htmlFor="select-vodokanal">Водоканал</label>
                    <select className="form-select" 
                    placeholder="Выберите из списка"
                    value={selectedValue}
                    onChange = {(e) => setSelectedValue(e.target.value)}
                    >
                        <option>Оренбург водоканал</option>
                        <option>Орск водоканал</option>
                        <option>Кувандык водоканал</option>
                        <option>Гай водоканал</option>
                        <option>Новотроицк водоканал</option>
                    </select>
                    </div>
                    <div className="client-personal-data-wrapper">
                        <div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="personal">Лицевой счёт</label>
                                <input className="form-input" type="text" id="personal" placeholder="Введите лицевой счёт"/>
                            </div>
                        </div>
                        <div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="phone">Номер телефона</label>
                                <input className="form-input" type="text" id="phone" placeholder="Ваш номер телефона"/>
                            </div>
                        </div>
                    </div>
                    <div className="divider warning-devider"></div>
                    <div className="warning-record">
                        <span>Отправляя заявку вы соглашаетесь на обработку своих персональных данных</span>
                    </div>
                    <button className="btn btn-primary btn-lg send-client-data-btn">Получить информацию о задолженности</button>
                </div>
            </form>
        </div>
    );
}
