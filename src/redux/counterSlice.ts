import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    count: 10   
}
const counterSlice = createSlice({
    initialState: initialState,
    name: 'counter',
    reducers: {
increment: (state, data) => {
    state.count+= data.payload;    
},
decrement: (state, data) => {
    state.count-=data.payload;
},
reset: (state)=> {
    state.count = initialState.count;
}
    }
})
export const counterActions = counterSlice.actions;
export const counterReducer = counterSlice.reducer;