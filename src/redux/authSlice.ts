import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  authenticated: '',
  authorization: false
}
const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    login: (state, data) => {
      const ADMIN: string = 'admin';
      if (!state.authenticated) {
        state.authenticated = data.payload;
        const userName = state.authenticated;
        //const arrUserName: string[] = state.authenticated.split('-');  //when we use a separator "-"
        const endUserName = userName.slice(-ADMIN.length, userName.length); //when we use just a word "admin"
        //if (arrUserName[1] == ADMIN) {
          if (endUserName == ADMIN) {
          state.authorization = true;
      }
      }
      
  },
    logout: (state) => {
      if (state.authenticated) {
        state.authenticated = '';
        state.authorization = false;
      }
    }

  }
})
export const authAction = authSlice.actions;
export const authReducer = authSlice.reducer;