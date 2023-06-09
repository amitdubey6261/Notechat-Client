import { createAsyncThunk, createReducer ,  } from "@reduxjs/toolkit";
import axios from "axios";
import { apiConfig } from "../../static";

const initState = {
    loading : false , 
}

export const loader =  createReducer( initState , {
    startLoading : (state , action)=>{
        state.loading = true ; 
    } , 
    stopLoding : (state , action )=>{
        state.loading = false ; 
    }
})