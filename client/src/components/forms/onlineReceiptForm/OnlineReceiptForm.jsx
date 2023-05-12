import React from 'react'
import "./onlineReceiptForm.scss"

export default function OnlineReceiptForm() {
  return (
    <div className="onlline-receipt-content-form">
        <div className="online-receipt-title">
            <span>Оплата онлайн физических лиц ООО "Оренбург Водоканал"</span> {/* Определение Физическое или юридическое это лицо и какой водоканал берутся из бд*/}
        </div>
        <form>
            <div className="form-group online-receipt-content-group">
                <div className="container general-wrapper">
                    <div className="columns">
                        <div className="column col-6 client-information-wrapper">
                            <span className="client-information">Здравствуйте Имя Отчество из бд <br/> полный адрес из бд</span>
                            <span className="client-information">Лицевой счёт: счёт</span>
                            <span className="client-information">Номер телефона: телефон</span>
                            <span className="client-information chekbox-wrapper">
                                <div className="form-group">
                                    <label className="form-checkbox">
                                        <input type="checkbox"/>
                                        <i className="form-icon"></i> Получить квитанцию на email
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label className="form-checkbox">
                                        <input type="checkbox"/>
                                        <i className="form-icon"></i> Получить квитанцию по смс
                                    </label>
                                </div>
                            </span>
                        </div>
                        <div className="column col-6 client-service-wrapper">
                            <span className="arear-title"> Задолженность на: дата из бд</span>
                            <ul className="service-list">
                                <li className="service-item">Услуга холодная вода <span>1049.32</span></li>
                                <li className="service-item">Услуга водоотведения <span>1196.98</span></li>
                                <li className="service-item">Услуга холодная вода <span>1049.32</span></li>
                                <li className="service-item">Услуга водоотведения <span>1196.98</span></li>
                                <li className="service-item">Услуга холодная вода <span>1049.32</span></li>
                                <li className="service-item">Услуга водоотведения <span>1196.98</span></li>
                            </ul>
                            <span className="total">Итого: сумма цены всех услуг руб</span>
                        </div>
                    </div>
                </div>
                <div className="divider pay-warning-devider"></div>
                <span className="informing-record">- Информация по состоянию расчёта обновляется с течением нескольких дней</span>
                <button className="btn btn-primary btn-lg pay-btn">Оплатить и передать показания</button>
                <div className="pay-warning-record">
                    <span>Отправляя заявку вы соглашаетесь на обработку своих персональных данных</span>
                </div>
            </div>
        </form>
    </div>
);
}
