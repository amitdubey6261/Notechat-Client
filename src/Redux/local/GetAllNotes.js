import { createAsyncThunk, createReducer } from "@reduxjs/toolkit"
import axios from "axios"
import { apiConfig, backendUrl, handleApiError } from "../../static"
import { toast } from "react-toastify"

const initalState = {
    status : false , 
    res : [] , 
    error : null , 
}

export const getAllNotes = createAsyncThunk( 'notes/all' , async( fields , {rejectWithValue}) =>{
    try{
        if( fields == undefined ){
            console.log('wo chalah hao ')
            const res = await axios.get( `${backendUrl()}/api/v1/notes/all` ) ; 
            console.log(res)
            return res ; 
        }
        else{
            const res = await axios.get( `${backendUrl()}/api/v1/notes/all?keyword=${fields.keyword}&category=${fields.category}&page=${fields.page}` , {...apiConfig()} ) ;
            return res ;  
        }
    }
    catch(e){
        toast.error(e.message);
        return handleApiError( e , rejectWithValue );
    }
})

export const getAllNotesReducer = createReducer( initalState , {
    [getAllNotes.pending] : ( state , action )=>{
        state.status = false ;
    }
    ,
    [ getAllNotes.fulfilled ] : ( state , action ) =>{
        state.status = true ;
        state.res = action.payload ; 
    }
    ,
    [getAllNotes.rejected] : ( state , action )=>{
        state.status = false , 
        state.res = action.payload ; 
    }
})

