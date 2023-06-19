import { createReducer , createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify'
import axios from 'axios' ; 
import { apiConfig, backendUrl, handleApiError } from "../../static";

const initialState = {
    loginDisplay : false ,
    loading : false , 
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
        toast.error(e.message);
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
        state.loading = true ; 
    }
    ,
    [loginRequest.fulfilled] : ( state , action ) =>{
        state.status = true ;
        state.loading = false ; 
        state.res = action.payload ; 
    } 
    , 
    [loginRequest.rejected] : ( state , action )=>{
        state.status = false ; 
        state.loading = false ; 
        state.error = action.payload ; 
    }

})