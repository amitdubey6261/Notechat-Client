import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
    registerDisplay: false ,
    res : [] , 
    status : null 
}

export const registrationRequest = createAsyncThunk( 'user/register' , async ( fields , { rejectWithValue } ) =>{
    try{
        const res = await axios.post('http://localhost:5000/api/v1/user/create' , {...fields} )  ;
        return res ; 
    }
    catch(e){
        console.log(e.response.data);
        return rejectWithValue(e.response.data) ; 
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
    }
    ,
    [ registrationRequest.rejected ] : ( state , action ) =>{
        state.status = 'rejected '; 
        toast.error('registration failed!');
    }
})