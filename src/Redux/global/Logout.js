import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { apiConfig, backendUrl, handleApiError } from "../../static";
import axios from "axios";

const initalState = {
    status : false
}

export const logout = createAsyncThunk( `user/logout` , async ( _ , {rejectWithValue})=>{
    try{
        const res = await axios.get( `${backendUrl()}/api/v1/user/logout` , {...apiConfig()}) ; 
        return res ; 
    }
    catch(e){
        return handleApiError( e , rejectWithValue );  
    }
} )

export const logoutReducer = createReducer( initalState , {
    [logout.pending] : ( state , action ) =>{
        state.status = false ; 
    }
    , 
    [logout.fulfilled] : ( state , action ) =>{
        state.status = true ; 
        window.location.reload();
    }
    ,
    [logout.rejected] : ( state , action ) =>{
        state.status = false ; 
    }
} )