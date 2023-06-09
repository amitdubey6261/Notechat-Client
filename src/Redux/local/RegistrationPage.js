import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
import { apiConfig, backendUrl } from "../../static";

const initialState = {
    registerDisplay: false ,
    res : [] ,  
    status : null , 
    error : null , 
}

export const registrationRequest = createAsyncThunk( 'user/register' , async ( fields , { rejectWithValue } ) =>{
    try{
        const res = await axios.post(`${backendUrl()}/api/v1/user/create` , {...fields} , {...apiConfig()} )  ;
        return res ; 
    }
    catch(e){
        if(e.response || e.response.data.message)
            return rejectWithValue(e.response.data) ; 
        else
            return rejectWithValue( error.message );
    }
} )

export const Register = createReducer(initialState, {

    toggleRegister: (state, action) => {
        if (state.registerDisplay == false) {
            state.registerDisplay = true;
        }
        else {
            state.registerDisplay = false;
        }
    }
    ,
    [ registrationRequest.pending ] : ( state , action ) =>{
        state.status = 'pending' ; 
    } 
    , 
    [ registrationRequest.fulfilled ] : ( state , action ) =>{
        state.status = 'fullfilled' ; 
        state.res = action.payload ; 
    }
    ,
    [ registrationRequest.rejected ] : ( state , action ) =>{
        state.status = 'rejected '; 
        state.error = action.payload ;
    }
})