import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
import { apiConfig, backendUrl, handleApiError } from "../../static";
import { toast } from "react-toastify";

const initialState = {
    registerDisplay: false ,
    loading : false , 
    res : [] ,  
    status : false , 
    error : null , 
}

export const registrationRequest = createAsyncThunk( 'user/register' , async ( fields , { rejectWithValue } ) =>{
    try{
        const res = await axios.post( `${backendUrl()}/api/v1/user/create` , {...fields} , {...apiConfig()} ) ;
        return res ; 
    }
    catch(e){
        toast.error(e.message)
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
        state.loading = true ; 
    } 
    , 
    [ registrationRequest.fulfilled ] : ( state , action ) =>{
        state.status = true ; 
        state.res = action.payload ; 
        state.loading = false ; 
    }
    ,
    [ registrationRequest.rejected ] : ( state , action ) =>{
        state.status = false ; 
        state.error = action.payload ;
        state.loading = false ; 
    }
})