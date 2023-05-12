import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from "../header/Header.jsx";
import SideBar from '../sideBar/SideBar.jsx';
import "./layout.scss";

export default function Layout() {
  const {pathname} = useLocation();
  const isAdminApp = pathname === "/" || 
    pathname === "/onlinereceipt" ||
    pathname === "/adminpanel"
    ? false : true

  return (
    <>
        {/*Отрисовать Кнопку открытия сайдбара и сам компонент SideBar
         на всех страницах кроме корневой страницы PaymentVodokanal,
         страницы авторизации пользователя и onlinereceipt */}
        <Header showSideBarBtn={isAdminApp}/>
        {isAdminApp && <SideBar/>}
        <main className="main-container">
            <Outlet/>
        </main>
    </>
  )
}
