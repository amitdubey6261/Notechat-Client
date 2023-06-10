import { createReducer , createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify'
import axios from 'axios' ; 
import Cookies from "js-cookie";
import { apiConfig, backendUrl, handleApiError } from "../../static";

const initialState = {
    loginDisplay : false ,
    res : [] , 
    status : false , 
    error : null ,  
}

export const loginRequest = createAsyncThunk( 'user/login' , async(obj , {rejectWithValue}) =>{

    try{
        const res = await axios.post(`${backendUrl()}/api/v1/user/login` , {...obj} , {...apiConfig()}) ;
        return res ; 
    }
    catch(e){
        handleApiError( e , rejectWithValue );
    }

})  

export const Login = createReducer( initialState , {

    toggleLogin : (state , action)=>{
        if(state.loginDisplay == false ){
            state.loginDisplay = true ; 
        }
        else{
            state.loginDisplay = false ; 
        }
    }
    , 
    [loginRequest.pending] : ( state , action ) =>{
        state.status = false ; 
    }
    ,
    [loginRequest.fulfilled] : ( state , action ) =>{
        state.status = true ;
        state.res = action.payload ; 
    } 
    , 
    [loginRequest.rejected] : ( state , action )=>{
        state.status = false ; 
        state.error = action.payload ; 
    }

})