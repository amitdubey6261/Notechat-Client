import { createAsyncThunk, createReducer } from "@reduxjs/toolkit"
import axios from "axios"
import { apiConfig, backendUrl, handleApiError } from "../../static"

const initialState = {
    status : false , 
    res : {} , 
    error : null , 
}

export const loadUser = createAsyncThunk( `user/loadUser` , async( _ , {rejectWithValue})=>{
    try{
        const res = await axios.get( `${backendUrl()}/api/v1/user` , {...apiConfig()});
        return res ; 
    }
    catch(e){
        return handleApiError( e , rejectWithValue );
    }
})

export const loadUserReducer = createReducer( initialState , {
    [loadUser.pending] : ( state , action )=>{
        state.status = false ; 
    }
    , 
    [loadUser.fulfilled] : ( state , action ) =>{
        state.status = true ; 
        state.res = action.payload ; 
    }
    ,
    [loadUser.rejected] : (state , action ) =>{
        state.status = false ; 
        state.error =  action.paylaod ; 
    }
})