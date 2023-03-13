import { createSlice } from "@reduxjs/toolkit";
import { CodeType } from "../models/CodeType";
const initialState: { code: CodeType } = {
    code: "OK"
}
const codeSlice = createSlice({
    initialState, 
    name: "errorCode",
    reducers: {
        setCode(state, data){
            state.code = data.payload;
        }
    }
})
export const codeActions = codeSlice.actions;
export const codeReduser = codeSlice.reducer;