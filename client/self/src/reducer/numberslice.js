import {createSlice} from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
    number : 0,
}

const ULR = axios.create({
    baseURL : "http://localhost:4003/",
});

export const initthunk = createAsyncThunk(
    'counternumber/up',
    async(data,thunkAPI)=>{
        console.log(data);
        const res = await ULR.get();
        return res.data
    }
    
)


export const counternumber = createSlice({
    initialState,
    name : "counternumber",
    reducers : {
        up : (state,action)=>{
            console.log(action.type);
            console.log(action.payload);
            return {...state, number : state.number+1}
        }
    },
    extraReducers : {
        [initthunk.fulfilled] : (state,action)=>{
          
            console.log(action.payload);
            return {...state, number : state.number + action.payload}
        }
    }
});



export const { up  , } = counternumber.actions

export default counternumber.reducer

