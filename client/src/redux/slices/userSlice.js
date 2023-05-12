import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { $basePath } from "../../basePath";

export const fetchUsers = createAsyncThunk(
  "user/fetchUsers",
  async function (id, thunkAPI) {
    try {
      const { data, statusText } = await $basePath.get("/user", {
        params: {
          ID: id,
        },
      });
      if (statusText !== "OK") {
        throw new Error("Ошибка загрузки данных с сервера");
      }
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const addNewUser = createAsyncThunk(
  "user/addUser",
  async function (newUserData, thunkAPI) {
    try {
      const { data, statusText } = await $basePath.post("/user", newUserData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (statusText !== "OK") {
        throw new Error("Ошибка при добавлении");
      }
      thunkAPI.dispatch(addUser(data));
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async function (id, thunkAPI) {
    try {
      const { data, statusText } = await $basePath.delete("/user", {
        data: {
          ID: id,
        },
      });
      if (statusText !== "OK") {
        throw new Error("Ошибка при удалении");
      }
      thunkAPI.dispatch(removeUser(data));
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const changeUser = createAsyncThunk(
  "user/changeUser",
  async function (dataToChange, thunkAPI) {
    console.log(dataToChange.get("surname"));
    try {
      const { data, statusText } = await $basePath.patch(
        "/user",
        dataToChange,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (statusText !== "OK") {
        throw new Error("Ошибка при изменении");
      }
      thunkAPI.dispatch(editUser(data));
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const initialState = {
  users: [],
  loading: true,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action) {
      state.users.push(action.payload);
    },
    removeUser(state, action) {
      state.users = [...action.payload];
    },
    editUser(state, action) {
      console.log(action.payload);
      state.users = [...action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { addUser, removeUser, editUser } = userSlice.actions;

export default userSlice.reducer;
