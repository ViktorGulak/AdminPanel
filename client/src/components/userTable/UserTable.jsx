import React, {useState, useRef} from 'react'
import {useSelector, useDispatch} from "react-redux"
import {deleteUser} from "../../redux/slices/userSlice"
import "./userTable.scss"
import Search from "../elements/search/Search"
import Table from "../elements/table/Table"
import UserOperationWindow from '../modals/userOperationWindow/UserOperationWindow';
import ModalOverlay from '../modals/modalOverlay/ModalOverlay';
import defaultImg from "../../assets/Profile-PNG.png"

export default function UserTableContainer() {
  const {users, loading, error} = useSelector(state => state.userList);
  const columnTitles = ["Login", "Email", "Role", "ФИО", "Фото", "Операции"];
  const dispatch = useDispatch();
  const sideBarIsActive = useSelector((state) => state.sideBarBtn.isFocus);
  const [active, setActive] = useState(false);
  const [addingOperation, setAddingOperation] = useState(true);
  
  let userData = useRef({
    id: "",
    login: "",
    email: "",
    role: "",
    fullName: "",
    photoPath: ""
  });
  let move = !sideBarIsActive ? "moving-container" : "";

  const deleteUserBtnClickHandler = (e) => {
    const currentTr = e.currentTarget.closest("tr");
    const userId = currentTr.dataset.code;
    console.log(userId)
    dispatch(deleteUser(userId));
  }
  const editUserBtnClickHandler = (e) => {
    setAddingOperation(false);
    const currentTr = e.currentTarget.closest("tr");
    const userId = currentTr.dataset.code;
    const childs = currentTr.cells;
    const userDataList = [];
    for(let i = 0; i < childs.length - 1; i++) {
      if(childs[i].firstChild.nodeName === "IMG"){
        let path = childs[i].firstChild.getAttribute("src").toString();
        userDataList.push(path);
      } else{
        userDataList.push(childs[i].innerHTML.toString());
      }
    }
    userData.current.id = userId;
    userData.current.login = userDataList[0];
    userData.current.email = userDataList[1];
    userData.current.role = userDataList[2];
    userData.current.fullName = userDataList[3];
    userData.current.photoPath = userDataList[4];
    setActive(!active)
  }
  
  return (
    <div className={`user-content-wrapper ${move}`}>
      <ModalOverlay isActive={active} setActive={setActive}>
        <UserOperationWindow  
          isActive={active} 
          setActive={setActive} 
          isAddingOperation={addingOperation}
          userData={addingOperation ? null : userData}
        />
      </ModalOverlay>
      <Search  htmlPlaceholder="Поиск пользователей"/>
      {error && <h2>Ошибка при работе с сервером</h2>}
      {loading ? <div className="loading loading-lg"></div> : 
        <Table columnTitles={columnTitles} >
          {users.map(item => (
            <tr key={item.userId} data-code={item.userId}>
              <td className="break-word-field">{item.login}</td>
              <td className="break-word-field">{item.email}</td>
              <td className="break-word-field">{item.role}</td>
              <td className="jump-word-field">{`${item.surname} ${item.name} ${item.patronymic}`}</td>
              <td className="photo-field"><img src={!item.photo ? defaultImg : item.photo} alt="Фото"/></td>
              <td className="operation-field">
                <button className="btn btn-success edit-btn" title="Изменить"
                  onClick={(e) => editUserBtnClickHandler(e)}
                ><i className="icon icon-edit"></i></button>
                <button className="btn btn-error delete-btn" title="Удалить"
                  onClick={(e) => deleteUserBtnClickHandler(e)}
                ><i className="icon icon-delete"></i></button>
              </td>
            </tr>
          ))}  
        </Table>
      }
      {loading ? null : 
        <button className="btn btn-primary add-user-btn"
          onClick={() => {
            setAddingOperation(true);
            setActive(!active)
          }}
        >Добавить</button>
      }
    </div>
  )
}
