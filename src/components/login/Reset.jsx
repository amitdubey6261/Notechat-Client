import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import LoginRegisterHead from './LoginRegisterHead'
import './login.css';
import img from "../../assets/images/New folder/il.jpeg";
import {toast} from 'react-toastify'
import { useDispatch } from 'react-redux';
import { resetPassword } from '../../Redux/local/ResetPassword';

const Reset = () => {

    const dispatch = useDispatch() ; 
    const params = useParams() ; 

    const [password , setPassword] = useState({
        password : "" , 
        confirmPassword : "" , 
    })

    const handleFormChange = (e)=>{
        setPassword({...password , [e.target.name] : e.target.value }) ; 
    }

    const formSubmit = () =>{
        if( password.password === password.confirmPassword ) {
            const payload = {} ; 
            payload.id = params.id ; 
            payload.password = password ;
            dispatch(resetPassword(payload)) ; 
        }
        else{
            toast.error("password not match try again");
        }
    }

    return (
        <>
            <div
                className="Login-wrapper reset"
                style={{width:"100%" , height:"100%" , "display" : "flex" , justifyContent : "center" , alignItems:"center"}}
            >
                <div  className="login-content">
                    <LoginRegisterHead />
                    <div className="register-form">
                        <form className="pure-form" onSubmit={( e)  => { e.preventDefault() ; formSubmit() }}>
                            <input onChange={handleFormChange} className="inp-fields" placeholder='enter password' type="password" name="password" id="" />
                            <input onChange={handleFormChange} className="inp-fields" placeholder='confirm password' type="password" name="confirmPassword" id="" />
                            <input className="login-btn" type="submit" value="RESET" />
                        </form>
                    </div>
                </div>
                <div className="login-image">
                    <img className="login-image-img" src={img} alt="not-found" />
                </div>
            </div>
        </>
    )
}

export default Reset