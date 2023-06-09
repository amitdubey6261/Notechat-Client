import { createAsyncThunk, createReducer } from "@reduxjs/toolkit"
import axios from "axios"
import { apiConfig } from "../../static"

const initialState = {
    status : null , 
    res : [] , 
    error : null , 
}

export const loadUser = createAsyncThunk( `user/loadUser` , async({rejectWithValue})=>{
    try{
        const res = await axios.get( `` , {...apiConfig()});
        return res ; 
    }
    catch(e){
        if( e.response || e.response.data.message ){
            return rejectWithValue( e.response.data ) ; 
        }
        else{
            return rejectWithValue( e.message ); 
        }
    }
})

export const loadUserReducer = createReducer( initialState , {
    [loadUser.pending] : ( state , action )=>{
        state.status = 'pending' ; 
    }
    , 
    [loadUser.fulfilled] : ( state , action ) =>{
        state.status = 'fulfilled' ; 
        res = action.payload ; 
    }
    ,
    [loadUser.rejected] : (state , action ) =>{
        state.status = 'rejected' ; 
        error =  action.paylaod ; 
    }
})