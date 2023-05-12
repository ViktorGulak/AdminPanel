import React, {useState, useRef} from 'react'
import {useDispatch} from "react-redux";
import {addNewUser, changeUser} from "../../../redux/slices/userSlice"
import  "./userOperationWindow.scss"

export default function UserOperationWindow({isActive, setActive, isAddingOperation, userData}) { 
    //const userPhotoPath = "./client/user_photo";
    const dispatch = useDispatch();
    const roleItem = ["Оператор", "Системный администратор", "Руководитель"];
    let id, surname, name, patronymic, role, login, email, photo;
    const // По дефолту все текстовые поля в модалке пустые эти значения мы укажем в value input окна добавления
        surnameRef = useRef(), 
        nameRef = useRef(), 
        patronymicRef =useRef(),
        roleRef = useRef(),
        loginRef = useRef(),
        passwordRef = useRef(),
        emailRef = useRef();
    
    if(userData){ 
        let fullNameList = userData.current.fullName.split(" ");
        id = userData.current.id   // В пропсах, в зависемости от операции 
        surname = fullNameList[0]; // (добавить/изменить) приходит объект ref с пользовательскими данными 
        name = fullNameList[1];     // если объект есть, то тогда это окно изменения
        patronymic = fullNameList[2]; // заполняем текстовые поля этого окна
        role = userData.current.role;   // данными из таблицы пользователей
        login = userData.current.login;
        email = userData.current.email;
        photo = userData.current.photoPath;
    } 
    // Если путь фото есть, то вставляем его в качестве текущего значения в состояние,
    // а сосотояние в текстовое полу photo это реализовано для окна изменения, если окно
    // добавления, то в текстовое поля photo попадёт пустая строка
    const [currentPhoto, setCurrentPhoto] = useState(photo ? photo : "");
    let windowTitle = isAddingOperation ? "Добавление пользователя" : "Изменение пользователя";
    const addUserHandler = (e) => {
        e.preventDefault();
        // При нажатии на кнопку добавить создаётся новый объект, куда переносятся все введённые 
        // пользователем данные в окне добавления. Этот объект и будет отправлен на сервер
        const newUserData = new FormData();

        newUserData.append("surname", surnameRef.current.value);
        newUserData.append("name", nameRef.current.value);
        newUserData.append("patronymic", patronymicRef.current.value);
        newUserData.append("role", roleRef.current.value);
        newUserData.append("login", loginRef.current.value);
        newUserData.append("email", emailRef.current.value);
        newUserData.append("photo", currentPhoto);
        if(isAddingOperation){
            newUserData.append("password", passwordRef.current.value);
            dispatch(addNewUser(newUserData));
            setActive(!isActive);
        } else{
            newUserData.append("id", id);
            dispatch(changeUser(newUserData));
            setActive(!isActive);
        }
    }
    
    return (
        <div className="modal-container user-modal">
            <div className="modal-header">
                <span>{windowTitle}</span>
                <button className="btn btn-action s-circle close-modal-btn"
                    onClick={(e) => {
                        e.preventDefault();
                        setActive(!isActive);
                    }}>
                    <i className="icon icon-cross"/>
                </button>
            </div>
            <div className="modal-body">
                <div className="left-input-container">
                    <div className="form-group">
                        <label className="form-label" htmlFor="surname">Фамилия</label>
                        <input className="form-input" ref={surnameRef} defaultValue={!isAddingOperation ? surname : ""} type="text" id="surname" placeholder="Фамиия"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="name">Имя</label>
                        <input className="form-input" ref={nameRef} defaultValue={!isAddingOperation ? name : ""} type="text" id="name" placeholder="Имя"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="patronymic">Отчество</label>
                        <input className="form-input" ref={patronymicRef} defaultValue={!isAddingOperation ? patronymic : ""} type="text" id="patronymic" placeholder="Отчество"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label"  htmlFor="role">Роль</label>
                        <select className="form-select" ref={roleRef}  defaultValue={role}  id="role">
                            {roleItem.map((elem, index) =>{
                                return <option key={elem+index}>{elem}</option>
                            })}
                        </select>
                    </div>
                    
                </div>
                <div className="right-input-container">
                    <div className="form-group">
                        <label className="form-label" htmlFor="login">Логин</label>
                        <input className="form-input" ref={loginRef}  defaultValue={!isAddingOperation ? login : ""} type="text" id="login" placeholder="Логин"/>
                    </div>
                    {isAddingOperation ?
                    <div className="form-group"> 
                        <label className="form-label" htmlFor="password">Пароль</label>
                        <input className="form-input" ref={passwordRef} type="password" autoComplete="on" id="password" placeholder="Пароль"/>       
                    </div>
                    : null}
                    <div className="form-group">
                        <label className="form-label" htmlFor="email">Эл_почта</label>
                        <input className="form-input" ref={emailRef}  defaultValue={!isAddingOperation ? email : ""} type="email" id="email" placeholder="Эл. почта"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="photo">
                            {isAddingOperation ? "Выберите фото" : "Текущее фото"}
                        </label>
                        <div className="photo-elements">
                            <label className="input-file" 
                                title={isAddingOperation ? "Добавить фото" : "Добавить новое фото"}>
                                <input type="file"
                                    id="photo"
                                    accept="image/*"
                                    onChange={(e) => setCurrentPhoto(e.target.files[0])}   
                                />
                                <span className="input-file-btn">
                                <i className="icon icon-photo"></i>           
                                </span>           
                            </label>
                            <span className="photo-name-viwer">{!photo ? "Фотографии нет" : photo}</span>
                        </div>     
                    </div>
                </div>
            </div>
            {isAddingOperation ?
                <button className="btn btn-primary add-btn"
                    onClick={(e) => addUserHandler(e)}
                >Добавить</button>
                :
                <button className="btn btn-success edit-btn"
                    onClick={(e) => addUserHandler(e)}
                >Изменить</button>
            }
        </div>
    );
}
