import { configureStore } from "@reduxjs/toolkit";
import sideBarBtnReducer from "./slices/sideBarBtnSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    sideBarBtn: sideBarBtnReducer,
    userList: userReducer,
  },
});

/*
sideBarBtn станет свойством глобального
состояния state когда мы будем обращаться
к состоянию через хук useSelector
*/
