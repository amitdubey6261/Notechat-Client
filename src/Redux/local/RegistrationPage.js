import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
import { apiConfig, backendUrl, handleApiError } from "../../static";

const initialState = {
    registerDisplay: false ,
    res : [] ,  
    status : false , 
    error : null , 
}

export const registrationRequest = createAsyncThunk( 'user/register' , async ( fields , { rejectWithValue } ) =>{
    try{
        const res = await axios.post( `http://localhost:5000/api/v1/user/create` , {...fields} , {...apiConfig()} ) ;
        return res ; 
    }
    catch(e){
        return handleApiError( e , rejectWithValue ); 
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
        state.status =  false; 
    } 
    , 
    [ registrationRequest.fulfilled ] : ( state , action ) =>{
        state.status = true ; 
        state.res = action.payload ; 
    }
    ,
    [ registrationRequest.rejected ] : ( state , action ) =>{
        state.status = false ; 
        state.error = action.payload ;
    }
})