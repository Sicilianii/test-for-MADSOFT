import {createSlice} from "@reduxjs/toolkit";
import {Time} from "../../../types/Time.type.ts";



const initialState: Time = {
    defaultTime: 0,
    timeStop: 0
}


const TimerSlice = createSlice({
    name: "timer",
    initialState,
    reducers: {
        setTime: (state, action) => console.log(action.payload),
    }
});


export const {setTime} = TimerSlice.actions;
export const timeReducer = TimerSlice.reducer;