import { createReducer , createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify'
import axios from 'axios' ; 

const initialState = {
    loginDisplay : false ,
    res : [] , 
    status : null 
}

export const loginRequest = createAsyncThunk( 'user/login' , async(obj) =>{

    try{
        const res = await axios.post('http://localhost:5000/api/v1/user/login' , {...obj}) ;
        toast.success('Login Successfull !');
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
        state.status = 'Pending' ; 
    }
    ,
    [loginRequest.fulfilled] : ( state , action ) =>{
        state.status = 'fullfilled' ;
    } 
    , 
    [loginRequest.rejected] : ( state , action )=>{
        state.status = 'rejected' ; 
        toast.error( 'Login Request Rejected' ) ; 
    }

})