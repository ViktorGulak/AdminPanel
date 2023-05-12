import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFocus: false,
};

export const sideBarBtnSlice = createSlice({
  name: "sideBarBtn",
  initialState,
  reducers: {
    setFocus(state) {
      state.isFocus = !state.isFocus;
    },
  },
});

export const { setFocus } = sideBarBtnSlice.actions;

export default sideBarBtnSlice.reducer;

/* 
    Слайс, на основе переданных в него редьюсеров (reducers: {}) автоматически
    сгенерирует экшены, экшенкреаторы и редюсер. setFocus экшен экспортируем в
    компонент Header чтобы передавать его в dispatch, а затем в reducer. Так же
    экспортируем сгенерированный reducer в глобальное хранилище store

*/
