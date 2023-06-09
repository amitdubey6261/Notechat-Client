import { createReducer , createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify'
import axios from 'axios' ; 
import Cookies from "js-cookie";
import { apiConfig, backendUrl } from "../../static";

const initialState = {
    loginDisplay : false ,
    res : [] , 
    status : null , 
    error : null ,  
}

export const loginRequest = createAsyncThunk( 'user/login' , async(obj) =>{

    try{
        const res = await axios.post(`${backendUrl()}/api/v1/user/login` , {...obj} , {...apiConfig()}) ;
        return res ; 
    }
    catch(e){
        toast.error(e) ;
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
        state.status = 'pending' ; 
    }
    ,
    [loginRequest.fulfilled] : ( state , action ) =>{
        state.status = 'fullfilled' ;
        state.res = action.payload ; 
    } 
    , 
    [loginRequest.rejected] : ( state , action )=>{
        state.status = 'rejected' ; 
    }

})